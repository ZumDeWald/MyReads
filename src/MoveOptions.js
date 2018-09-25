import React, { Component } from 'react';

class MoveOptions extends Component {

  render () {
    const { book, changeShelf } = this.props;

    return(
      <div className="book-shelf-changer">

        <select
          value = {book.shelf || 'none'}
          onChange={
            (e) => {
              changeShelf(book, e.target.value);

            }
          }
          >

          <option value="move" disabled>Move to...</option>

          <option value="none">None</option>

          <option value="currentlyReading">Currently Reading</option>

          <option value="wantToRead">Want to Read</option>

          <option value="read">Read</option>

        </select>

      </div>
    )

  }


}

export default MoveOptions
