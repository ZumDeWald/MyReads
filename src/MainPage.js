import React, { Component } from 'react';
import Shelf from './Shelf';

class MainPage extends Component {

  render () {

    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">

            <div className="bookshelf">
              <Shelf shelfName='Currently Reading'
                books={this.props.books}/>
            </div>

            <div className="bookshelf">
              <Shelf shelfName='Want To Read'
              books={this.props.books}/>
            </div>

            <div className="bookshelf">
              <Shelf shelfName='Read'
              books={this.props.books}/>
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
