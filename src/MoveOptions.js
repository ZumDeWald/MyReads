import React, { Component } from 'react';

class MoveOptions extends Component {

  render () {

    return(
      <div className="book-shelf-changer">

        <select
          value = {this.props.book.shelf || 'none'}
          onChange={
            (e) => {
              this.props.changeShelf(this.props.book, e.target.value);
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
