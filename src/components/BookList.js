import React from 'react'
import BookItem from './BookItem';

export default function BookList({books, onBookClick}) {
  return (
    <div className="book-list">
        {books.map((book, index) => (
        <BookItem key={index} book={book} onClick={() => onBookClick(book)} />
        ))}
  </div>
  )
}
