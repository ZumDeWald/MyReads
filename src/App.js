import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css';

import MainPage from './MainPage';
import Search from './Search';

import { Route } from 'react-router-dom';

class BooksApp extends React.Component {

  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({ books });
    })
    .catch((error) => console.log(error))
  }

  changeShelf = (bookID, newShelf) => {
      BooksAPI.update(bookID, newShelf);
      BooksAPI.getAll()
      .then((books) => {
        this.setState({ books });
      })
      .catch((error) => console.log(error))
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

        <Route exact path="/search" render = { () =>
        <Search
          books= {this.state.books}
          changeShelf = {this.changeShelf}
        />
      } />

      </div>
    )
  }
}

export default BooksApp
