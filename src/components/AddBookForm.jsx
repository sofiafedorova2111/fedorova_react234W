

const AddBookForm = () => {
    return (
      <section className="addBookForm">
        <h2>Add a New Book</h2>
  
        <form>
          <input type="number" placeholder="Book ID" />
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Author" />
          <input type="date" placeholder="Release Date" />
          <input type="number" placeholder="Average Stars" />
  
          <input type="text" placeholder="Genre 1" />
          <input type="text" placeholder="Genre 2" />
          <input type="text" placeholder="Genre 3" />
  
          <label>
            <input type="checkbox" /> eBook Available
          </label>
  
          <button type="button">Add Book</button>
        </form>
      </section>
    )
  }
  
  export default AddBookForm
  