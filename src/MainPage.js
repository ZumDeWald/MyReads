import React, { Component } from 'react';
import Shelf from './Shelf';
import { Link } from 'react-router-dom';

class MainPage extends Component {

  render () {
    const { books } = this.props;

    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">

            <div className="bookshelf">

              <Shelf shelfName='Currently Reading'
                books={books.filter( (book) => book.shelf === 'currentlyReading')}
                changeShelf = {this.props.changeShelf}
              />
            </div>

            <div className="bookshelf">
              <Shelf shelfName='Want To Read'
              books={books.filter( (book) => book.shelf === 'wantToRead')}
              changeShelf = {this.props.changeShelf}
            />
            </div>

            <div className="bookshelf">
              <Shelf shelfName='Read'
              books={books.filter( (book) => book.shelf === 'read')}
              changeShelf = {this.props.changeShelf}
            />
            </div>

        </div>

        <div className="open-search">

          <Link to={{ pathname: '/search'}}></Link>

        </div>
      </div>
    )
  }


}

export default MainPage
