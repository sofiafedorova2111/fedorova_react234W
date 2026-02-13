import Book from './Book.jsx'

const BookList = ({ books }) => {
  return (
    <div className="bookList">
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  )
}

export default BookList
