import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';

import Book from './Book';


class Search extends Component {

  state = {
    searchResults: [],
    query: ''
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
      if(response.error) {
        return this.setState({ searchResults: [] })
      }
      response.forEach(book => {
        const filteredBook = this.props.books.filter( i => i.id === book.id);
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
