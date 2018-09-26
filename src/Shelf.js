import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {

  render () {

    // *Used destructuring throughout to simplify code
    const { shelfName, books, changeShelf } = this.props;


    return (
      <div className="bookshelf">
          <h1 className="bookshelf-title">{shelfName}</h1>

        <div className="bookshelf-books">

          <Book
          books = {books}
          changeShelf = {changeShelf}
          />

        </div>
      </div>
    )
  }


}

export default Shelf
