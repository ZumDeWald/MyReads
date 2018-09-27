import React from 'react';
import { Link } from 'react-router-dom';

import Shelf from './Shelf';

function MainPage(props) {
    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">

              <Shelf shelfName='Currently Reading'
                books = {props.books.filter( (book) => book.shelf === 'currentlyReading')}
                changeShelf = {props.changeShelf}
              />

              <Shelf shelfName='Want To Read'
              books = {props.books.filter( (book) => book.shelf === 'wantToRead')}
              changeShelf = {props.changeShelf}
            />

              <Shelf shelfName='Read'
              books = {props.books.filter( (book) => book.shelf === 'read')}
              changeShelf = {props.changeShelf}
            />

        </div>

        <div className="open-search">

          <Link to={{ pathname: '/search'}}></Link>

        </div>
      </div>
    )
  }


export default MainPage
