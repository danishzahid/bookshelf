export const initialState = {
  books: [
    {
      name: "Book 1",
      category: "Fantasy",
      author: "Author A",
      rating: 4.5,
      currentStatus: "Already Read",
      image:
        "https://markmanson.net/wp-content/themes/mm-main/images/book-cover-subtle-art.png",
    },
    {
      name: "Book 2",
      category: "Mystery",
      author: "Author B",
      rating: 4.2,
      currentStatus: "Want to Read",
      image:
        "https://markmanson.net/wp-content/themes/mm-main/images/book-cover-subtle-art.png",
    },
    {
      name: "Book 3",
      category: "Science Fiction",
      author: "Author C",
      rating: 4.7,
      currentStatus: "Already Read",
      image:
        "https://markmanson.net/wp-content/themes/mm-main/images/book-cover-subtle-art.png",
    },
    {
      name: "Book 4",
      category: "Romance",
      author: "Author D",
      rating: 4.0,
      currentStatus: "Want to Read",
      image:
        "https://markmanson.net/wp-content/themes/mm-main/images/book-cover-subtle-art.png",
    },
    {
      name: "Book 5",
      category: "Fantasy",
      author: "Author E",
      rating: 4.8,
      currentStatus: "Want to Read",
      image:
        "https://markmanson.net/wp-content/themes/mm-main/images/book-cover-subtle-art.png",
    },
    {
      name: "Book 6",
      category: "Thriller",
      author: "Author F",
      rating: 4.6,
      currentStatus: "Currently Reading",
      image:
        "https://markmanson.net/wp-content/themes/mm-main/images/book-cover-subtle-art.png",
    },
    {
      name: "Book 7",
      category: "Biography",
      author: "Author G",
      rating: 4.4,
      currentStatus: "Currently Reading",
      image:
        "https://markmanson.net/wp-content/themes/mm-main/images/book-cover-subtle-art.png",
    },
    {
      name: "Book 8",
      category: "Fantasy",
      author: "Author H",
      rating: 4.9,
      currentStatus: "Already Read",
      image:
        "https://markmanson.net/wp-content/themes/mm-main/images/book-cover-subtle-art.png",
    },
    {
      name: "Book 9",
      category: "Mystery",
      author: "Author I",
      rating: 4.1,
      currentStatus: "Already Read",
      image:
        "https://markmanson.net/wp-content/themes/mm-main/images/book-cover-subtle-art.png",
    },
    {
      name: "Book 10",
      category: "Fantasy",
      author: "Author J",
      rating: 4.7,
      currentStatus: "Currently Reading",
      image:
        "https://markmanson.net/wp-content/themes/mm-main/images/book-cover-subtle-art.png",
    },
    {
      name: "Book 11",
      category: "Science Fiction",
      author: "Author K",
      rating: 4.3,
      currentStatus: "Already Read",
      image:
        "https://markmanson.net/wp-content/themes/mm-main/images/book-cover-subtle-art.png",
    },
    {
      name: "Book 12",
      category: "Fantasy",
      author: "Author L",
      rating: 4.6,
      currentStatus: "Already Read",
      image:
        "https://markmanson.net/wp-content/themes/mm-main/images/book-cover-subtle-art.png",
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "CURRENTLY_READING":
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.name === action.payload) {
            return {
              ...book,
              currentStatus: "Currently Reading",
            };
          }
          return book;
        }),
      };
    case "ALREADY_READ":
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.name === action.payload) {
            return {
              ...book,
              currentStatus: "Already Read",
            };
          }
          return book;
        }),
      };
    case "WANT_TO_READ":
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.name === action.payload) {
            return {
              ...book,
              currentStatus: "Want to Read",
            };
          }
          return book;
        }),
      };
    default:
      return state;
  }
};
