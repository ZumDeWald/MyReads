import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';


class MoveOptions extends Component {

  render () {
    const { bookBinder } = this.props;

    return(
      <div className="book-shelf-changer">

        <select>

          <option value="move" disabled>Move to...</option>

          <option value="none">None</option>

          <option value="currentlyReading"
            onClick={() => {BooksAPI.update({bookBinder}, 'currentlyReading')}}
            >Currently Reading</option>

          <option value="wantToRead"
            onClick={() => {BooksAPI.update({bookBinder}, 'wantToRead')}}>Want to Read</option>

          <option value="read"
            onClick={() => {BooksAPI.update({bookBinder}, 'read')}}>Read</option>

        </select>

      </div>
    )

  }


}

export default MoveOptions
