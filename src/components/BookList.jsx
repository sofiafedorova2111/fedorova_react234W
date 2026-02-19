import Book from './Book.jsx';

const BookList = ({ books, deleteBook, updateBook }) => {
  return (
    <div className="bookList">
      {books.map((book) => (
        <Book
          key={book.id}
          currentBook={book}
          deleteBook={deleteBook}
          updateBook={updateBook}
        />
      ))}
    </div>
  );
};

export default BookList;
