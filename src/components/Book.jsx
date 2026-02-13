const Book = ({ book }) => {
    return (
      <section className="book">
        <header>
          <h3>{book.title}</h3>
          <h4>by {book.author}</h4>
        </header>
        <div className="bookDetails">
          <p>Released: {book.releaseDate}</p>
          <p>Rating: {book.aveStars}</p>
          <ul className="genreList">
            {book.genre.map(g => <li key={g}>{g}</li>)}
          </ul>
        </div>
      </section>
    )
  }
  
  export default Book
  