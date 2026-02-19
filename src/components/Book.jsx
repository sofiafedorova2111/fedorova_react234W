import { useState } from "react";


const Book = ({ currentBook, deleteBook, updateBook }) => {

  const [isActive, setIsActive] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [updatedTitle, setUpdatedTitle] = useState(currentBook.title);
  const [updatedAuthor, setUpdatedAuthor] = useState(currentBook.author);

  const handleDeleteClick = (event, id) => {
    event.preventDefault();
    deleteBook(id);
  };

  const handleEditClick = (event) => {
    event.preventDefault();
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const updatedBook = {
      ...currentBook,
      title: updatedTitle,
      author: updatedAuthor
    };

    updateBook(updatedBook);
    setIsEditing(false);
  };

  return (
    <div
      className={isActive ? "bookActive" : "bookBox"}
      onClick={() => setIsActive(!isActive)}
    >
      {isEditing ? (
        <>
          <input
            value={updatedTitle}
            onChange={(event) => setUpdatedTitle(event.target.value)}
          />
          <input
            value={updatedAuthor}
            onChange={(event) => setUpdatedAuthor(event.target.value)}
          />
          <button onClick={handleSaveClick}>Save Changes</button>
        </>
      ) : (
        <>
          <h3>{currentBook.title}</h3>
          <h4>by {currentBook.author}</h4>
        </>
      )}

      <p><strong>Released:</strong> {currentBook.releaseDate}</p>
      <p><strong>Rating:</strong> {currentBook.aveStars}</p>

      <ul>
        {currentBook.genre.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ul>

      <h4>Delete Book</h4>
      <a href="#" onClick={(event) => handleDeleteClick(event, currentBook.id)}>
        Delete {currentBook.title}
      </a>

      <h4>Edit Book</h4>
      <a href="#" onClick={handleEditClick}>
        Edit {currentBook.title}
      </a>
    </div>
  );
  
};

export default Book;
