import PageHeader from './components/PageHeader.jsx'
import BookList from './components/BookList.jsx'
import AddBookForm from './components/AddBookForm.jsx'

function App({ books }) {
  return (
    <div className="app">
      <PageHeader />
      <BookList books={books} />
      <AddBookForm />
    </div>
  )
}

export default App