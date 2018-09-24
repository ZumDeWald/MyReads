import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import MoveOptions from './MoveOptions';

class Book extends Component {


  render() {
    const { books } = this.props;

    return(

      <ol className="books-grid">

        {books.map( (book, index) => (
          <li key={index}>

            <div className="book">
              <div className="book-top">

                <img className="book-cover" alt={book.title} style={{ width: 128, height: 193}} src={book.imageLinks.smallThumbnail} />

                <MoveOptions
                  bookBinder={book}
                />

              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors[0]}</div>
            </div>

          </li>
        ))}

      </ol>
    )
  }


}

export default Book
