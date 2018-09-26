import React, { Component } from 'react';
import MoveOptions from './MoveOptions';

class Book extends Component {


  render() {

    // *Used destructuring throughout to simplify code
    const { books, changeShelf } = this.props;


    return(

      <ol className="books-grid">

        {books.map( (book, index) => (
          <li key={index}>

            <div className="book">
              <div className="book-top">


                { /* Ternary to check if image exists and replace if not */
                  ((book.imageLinks) !== undefined) ?

                   (<div className="book-cover" alt={book.title} style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`, backgroundSize: `cover`}}></div>) :

                   (<div className="book-cover" alt={book.title} style={{ width: 128, height: 193, backgroundImage: `url(http://via.placeholder.com/128x193?text=No%20Cover)`, backgroundSize: `cover`}}></div>) }

                <MoveOptions
                  book={book}
                  changeShelf = {changeShelf}
                />

              </div>

              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>

            </div>

          </li>
        ))}

      </ol>
    )
  }


}

export default Book
