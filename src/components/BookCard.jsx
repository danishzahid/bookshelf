import React, { useState } from "react";
import styles from "./BookCard.module.css";
import { useData } from "../contexts/DataContexts";

const BookCard = ({ book }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const { dispatch } = useData();

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // Handle the logic for moving the book to the selected option
    dispatch({
      type: option.toUpperCase().replace(/ /g, "_"),
      payload: book.name,
    });
    setShowPopup(false);
  };

  return (
    <div className={styles.bookCard}>
      <img src={book.image} alt={book.name} className={styles.bookImage} />
      <h3 className={styles.bookName}>{book.name}</h3>
      <p className={styles.authorName}>{book.author}</p>
      <p className={styles.bookRating}>Rating: {book.rating}</p>
      <div className={styles.popup}>
        <button onClick={handlePopupToggle}>Status</button>
        {showPopup && (
          <div className={styles.popupContent}>
            <p>Move to:</p>
            <ul className={styles.dropdownOptions}>
              <li onClick={() => handleOptionSelect("Currently Reading")}>
                Currently Reading
              </li>
              <li onClick={() => handleOptionSelect("Want to Read")}>
                Want to Read
              </li>
              <li onClick={() => handleOptionSelect("Already Read")}>
                Already Read
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;
