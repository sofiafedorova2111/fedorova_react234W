import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const BOOKS = [
  {
    id:1,
    title:"Crime and Punishment",
    author: "Fyodor Dostoevsky", 
    genre: ["Fiction", "Literature"], 
    releaseDate: "1866-12-01", 
    aveStars: 4.8, 
    eBook: true
  },
  {
    id:2,
    title:"The Three Musketeers",
    author: "Alexandre Dumas", 
    genre: ["Novel", "Historical"], 
    releaseDate: "1844-03-14", 
    aveStars: 4, 
    eBook: true
  },
  {
    id:3,
    title:"The Metamorphosis",
    author: "Franz Kafka", 
    genre: ["Novel", "Psychological"], 
    releaseDate: "1915-11-01", 
    aveStars: 4.6, 
    eBook: false
  },

  {
    id: 4,
    title: "Test Book",
    author: "Test Author",
    genre: ["Test"],
    releaseDate: "2025-01-01",
    aveStars: 5,
    eBook: false
  }
  

]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App books={BOOKS} />
  </StrictMode>,
)

