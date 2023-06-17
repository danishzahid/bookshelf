import { useEffect, useState } from "react";
import { useData } from "../contexts/DataContexts";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";

export const Search = () => {
  const [search, setSearch] = useState("");
  const { books } = useData().state;
  const [filteredBooks, setFilteredBooks] = useState([]);
  const renderSearchResults = (search) => {
    const results = books.filter((book) => {
      console.log(book.name.toLowerCase().includes(search.toLowerCase()));
      return book.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredBooks(results);
    console.log(results, "results");
  };
  console.log(filteredBooks);
  useEffect(() => {
    //console.log(search);
    renderSearchResults(search);
  }, [search]);

  return (
    <>
      <h1>Search</h1>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <div>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="Search for a book"
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridGap: "20px",
          marginTop: "20px",
        }}
      >
        {filteredBooks.map((book) => {
          return <BookCard book={book} />;
        })}
      </div>
    </>
  );
};
