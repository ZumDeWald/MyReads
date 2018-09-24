import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css';
import MainPage from './MainPage';

class BooksApp extends React.Component {
  shelves = [
    {id: 'currentlyReading'},
    {id: 'wantToRead'},
    {id: 'read'},
    {id: 'none'}
  ]

  state = {
    books: [],
    showSearchPage: false
  }
  /**
   * TODO: Instead of using this state variable to keep track of which page
   * we're on, use the URL in the browser's address bar. This will ensure that
   * users can use the browser's back and forward buttons to navigate between
   * pages, as well as provide a good URL they can bookmark and share.
   */

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
      // this.state.books.map( )
    })
  }

  ChangeShelf = (book, newShelf) => {
    book.id = `${newShelf}`
  }


  render() {

    return (
      <div className="app">

          <MainPage
          books= {this.state.books} />

      </div>
    )
  }
}

export default BooksApp
