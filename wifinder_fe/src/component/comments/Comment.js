import React, { Component } from 'react';

export class  Comment extends Component{
  render() {
    return (
      <div className="comment">
        <h2 className="author">{this.props.author}</h2>
        <p>{this.props.text}</p>
      </div>
    );
  }
  }

  export default Comment;