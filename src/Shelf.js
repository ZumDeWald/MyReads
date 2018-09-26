import React, { Component } from 'react';
import Book from './Book';

function Shelf (props) {
    return (
      <div className="bookshelf">
          <h1 className="bookshelf-title">{props.shelfName}</h1>

        <div className="bookshelf-books">

          <Book
          books = {props.books}
          changeShelf = {props.changeShelf}
          />

        </div>
      </div>
    )
  }


export default Shelf
