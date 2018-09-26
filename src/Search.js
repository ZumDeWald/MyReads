import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import MoveOptions from './MoveOptions';
import Shelf from './Shelf';
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

  updateQuery = (query) => {
    this.setState({ query : query });
    this.checkResults(query)
  }

  checkResults(toCheck) {
    if (toCheck === '' || toCheck === undefined) {
      return this.setState({ searchResults: [] });
    }
    BooksAPI.search(toCheck).then(res => {
      if(res.error) {
        return this.setState({ searchResults: [] })
      } else {
      return this.setState({ searchResults: res });
    }})
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

            <Shelf
              shelfName = "All Results:"
              books = {this.state.searchResults}
              changeShelf = {changeShelf}
            />

        </div>

      </div>
    )
  }


}

export default Search
