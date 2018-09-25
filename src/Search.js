import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import MoveOptions from './MoveOptions';
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
    this.setState({ query : query.trim() });
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
    const { changeShelf } = this.props;
    const { searchResults } = this.state;



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

            {searchResults.map( (book, index) => (
              <li key={index}>

                <div className="book">
                  <div className="book-top">

                    <div className="book-cover" alt={book.title} style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>

                    <MoveOptions
                      book={book}
                      changeShelf = {changeShelf}
                    />

                  </div>
                  <div className="book-title">{book.title}</div>

                </div>

              </li>
            ))
          }

          </ol>
        </div>

      </div>
    )
  }


}

export default Search
