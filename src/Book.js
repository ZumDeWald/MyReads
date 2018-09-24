import React, { Component } from 'react';
import MoveOptions from './MoveOptions';

class Book extends Component {


  render() {
    const { books } = this.props;
    console.log(books)

    return(

      <ol className="books-grid">

        {books.map( (book, index) => (
          <li key={index}>

            <div className="book">
              <div className="book-top">

                <div className="book-cover" alt={book.title} style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>

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
