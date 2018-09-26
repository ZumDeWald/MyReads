import React, { Component } from 'react';

function MoveOptions (props) {

    return(
      <div className="book-shelf-changer">
        <select
          value={props.book.shelf || 'none'}
          onChange={
            (e) => {
              props.changeShelf(props.book, e.target.value);
            }}>

          <option value="move" disabled>Move to...</option>
          <option value="none">None</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>

        </select>
      </div>
    )

  }


export default MoveOptions
