import React, { Component } from 'react';

class Shelf extends Component {

  render () {
    return (
      <div className="bookshelf">
          <h1 className="bookshelf-title">{this.props.shelfName}</h1>
      </div>)
  }


}

export default Shelf
