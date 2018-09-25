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

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({ books });
    })
    .catch((error) => console.log(error))
  }

  updateLocalBooks = (book, newShelf) => {
    
  }

  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(
    BooksAPI.getAll()
    .then((books) => {
      this.setState({ books });
    }))
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

        <Route exact path="/search" component = { Search } />

      </div>
    )
  }
}

export default BooksApp
