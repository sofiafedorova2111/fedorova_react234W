import { useState } from "react";
import PageHeader from './components/PageHeader.jsx';
import BookList from './components/BookList.jsx';
import AddBookForm from './components/AddBookForm.jsx';
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Harry Potter",
      author: "J.K. Rowling",
      releaseDate: "",
      aveStars: 5,
      genre: ["Fantasy", "Adventure"]
    },
    {
      id: 2,
      title: "The Lord of Rings",
      author: "J.R.R Tolkien",
      releaseDate: "1813",
      aveStars: 4,
      genre: ["Adventure", "Fantasy"]
    }
  ]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const updateBook = (updatedBook) => {
    setBooks(
      books.map((book) =>
        book.id !== updatedBook.id ? book : updatedBook
      )
    );
  };

  return (
    <>
      <PageHeader
        appName="Book Review App"
        slogan="Read the history."
        color="rose"
      />

      <AddBookForm addBook={addBook} />

      <BookList
        books={books}
        deleteBook={deleteBook}
        updateBook={updateBook}
      />
    </>
  );
};

export default App;
