import { useEffect, useState } from 'react'
import Book from './Book'
import { BookInterface } from '../interfaces/Book'

const FetchComponent = function () {
  // ogni volta che dobbiamo mostrare dei dati recuperati da una chiamata API,
  // è necessario recuperare tali dati con una fetch e salvare il risultato
  // in una variabile di stato
  // questa fetch dev'essere effettuata nella fase di MONTAGGIO del componente,
  // quindi la inserisco dentro uno useEffect con array di dipendenze vuoto.

  const [books, setBooks] = useState<BookInterface[]>([])

  const fetchBooks = function () {
    fetch('https://striveschool-api.herokuapp.com/food-books')
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('problema nella chiamata API')
        }
      })
      .then((arrayOfBooks: BookInterface[]) => {
        console.log('DATI', arrayOfBooks)
        setBooks(arrayOfBooks)
      })
      .catch((e) => console.log('ERRORE', e))
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div>
      <h2>LIBRI RECUPERATI DA API</h2>
      {books.map((b) => (
        <Book bookDetails={b} key={b.id} />
      ))}
    </div>
  )
}

export default FetchComponent
