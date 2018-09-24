import React, { Component } from 'react';
import Shelf from './Shelf';

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
                books={books.filter( (book) => book.shelf === 'currentlyReading')}/>
            </div>

            <div className="bookshelf">
              <Shelf shelfName='Want To Read'
              books={books.filter( (book) => book.shelf === 'wantToRead')}/>
            </div>

            <div className="bookshelf">
              <Shelf shelfName='Read'
              books={books.filter( (book) => book.shelf === 'read')}/>
            </div>

        </div>

        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }


}

export default MainPage
