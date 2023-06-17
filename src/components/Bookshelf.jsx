import React, { useContext } from "react";
import styles from "./Bookshelf.module.css";
import { DataContext, useData } from "../contexts/DataContexts";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";

export const Bookshelf = () => {
  const { books } = useData().state;
  //   const data = useContext(DataContext).
  //   console.log(data);

  const filterBooks = (status) => {
    return books.filter((book) => book.currentStatus === status);
  };

  return (
    <>
      <Link to={"/search"}>
        {" "}
        <button>Search by Name</button>
      </Link>
      <div className={styles.bookshelf}>
        <div className={styles.section}>
          <h2>Currently Reading</h2>
          <div className={styles.bookGrid}>
            {/* Render book cards for "Currently Reading" */}
            {filterBooks("Currently Reading").map((book) => {
              return <BookCard book={book} />;
            })}
          </div>
        </div>
        <div className={styles.section}>
          <h2>Want to Read</h2>
          <div className={styles.bookGrid}>
            {/* Render book cards for "Want to Read" */}
            {filterBooks("Want to Read").map((book) => {
              return <BookCard book={book} />;
            })}
          </div>
        </div>
        <div className={styles.section}>
          <h2>Already Read</h2>
          <div className={styles.bookGrid}>
            {/* Render book cards for "Already Read" */}
            {filterBooks("Already Read").map((book) => {
              return <BookCard book={book} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
