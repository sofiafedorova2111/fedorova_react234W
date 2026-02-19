import { useState } from 'react';


const AddBookForm = ({ addBook }) => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [aveStars, setAveStars] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      id: Date.now(),
      title: title,
      author: author,
      releaseDate: releaseDate,
      aveStars: Number(aveStars),
      genre: genre.split(", ")
    };

    addBook(newBook);

    setTitle("");
    setAuthor("");
    setReleaseDate("");
    setAveStars("");
    setGenre("");
  };

  return (
    <div className="addBookForm">
      <h2>Add a New Book</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Book Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          placeholder="Author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        <input
          placeholder="Release Year"
          value={releaseDate}
          onChange={(event) => setReleaseDate(event.target.value)}
        />

        <input
          placeholder="Average Stars"
          value={aveStars}
          onChange={(event) => setAveStars(event.target.value)}
        />

        <input
          placeholder="Genres (comma-separated)"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;

  

