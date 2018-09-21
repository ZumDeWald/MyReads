import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {

  render () {
    
    return (
      <div className="bookshelf">
          <h1 className="bookshelf-title">{this.props.shelfName}</h1>

        <div className="bookshelf-books">
        <Book />
        </div>
      </div>
    )
  }


}

export default Shelf
