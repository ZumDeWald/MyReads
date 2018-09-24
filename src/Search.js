import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom';

class Search extends Component {

  state = {
    books: [],
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query : query.trim() })
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({ books });
    })
    .catch((error) => console.log(error))
  }

  render () {

    return (

      <div className="search-books">

        <div className="search-books-bar">

            <Link className="close-search" to={{ pathname: '/'}}>Close</Link>

          <div className="search-books-input-wrapper">

            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => this.updateQuery(e.target.value)}
            />

          </div>

        </div>

        <div className="search-books-results">
          <ol className="books-grid">

          </ol>
        </div>

      </div>
    )
  }


}

export default Search
