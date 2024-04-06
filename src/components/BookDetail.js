import React from 'react'

export default function BookDetail({book, onClose}) {
  return (
    <div className='book-detail'>
        <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
        <h2>{book.volumeInfo.title}</h2>
        <p>{book.volumeInfo.description}</p>
        <span>
          Publisher:{book.volumeInfo.publisher}|
          Average Rating:{book.volumeInfo.averageRating}|
          Language:{book.volumeInfo.language}
        </span>
        <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Read Now</a>
        <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">More Info</a>  
        <button onClick={onClose}>Close</button>
    </div>
  )
}
