import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Book from './Book';
import { Link } from 'react-router-dom';


class Search extends Component {

  state = {
    books: [],
    searchResults: [],
    query: ''
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({ books });
    })
    .catch((error) => console.log(error))
  }

  //updateQuery listens for the change in input and sets state, then triggers result chain
  updateQuery = (query) => {
    this.setState({ query : query });
    this.checkResults(query)
  }

  //checkResults ensures result isn't empty or undefined, then conducts search
  checkResults(toCheck) {
    if (toCheck === '' || toCheck === undefined) {
      return this.setState({ searchResults: [] });
    }
    BooksAPI.search(toCheck).then(response => {
      response.forEach(book => {
        const filteredBook = this.state.books.filter( i => i.id === book.id);
          if (filteredBook.length > 0) {
            book.shelf = filteredBook[0].shelf;
            }
      });
      return this.setState({ searchResults: response });
   });
  }


  render () {
    // *Used destructuring throughout to simplify code
    const { changeShelf } = this.props;
    const { searchResults, query } = this.state;


    return (

      <div className="search-books">
        <div className="search-books-bar">

            <Link className="close-search" to={{ pathname: '/'}}>Close</Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(e) => this.updateQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">

            <Book
              books = {searchResults}
              changeShelf = {changeShelf}
            />

        </div>
      </div>
    )
  }


}

export default Search
