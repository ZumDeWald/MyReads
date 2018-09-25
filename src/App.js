import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css';

import MainPage from './MainPage';
import Search from './Search';

import { Route } from 'react-router-dom';

class BooksApp extends React.Component {

  state = {
    books: [],
  }


  // *Initial API request to fetch the array of books and fill
  // the local books array
  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({ books });
    })
    .catch((error) => console.log(error))
  }


  //  *changeShelf uses the BooksAPI update method to change
  // the shelf of the chosen book
  //
  //  *The return from the promise is then used to update the shelf
  // locally, remove the book from the local array, and
  // lastly add it back in with the new shelf
    changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
    .then(response => {
      book.shelf = newShelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
        }))
      }
    )
  }


  render() {

    return (
      <div className="app">

        <Route exact path="/" render={ () =>
        <MainPage
          books= {this.state.books}
          changeShelf = {this.changeShelf}
         />
       } />

        <Route exact path="/search" component = { Search } />

      </div>
    )
  }
}

export default BooksApp
