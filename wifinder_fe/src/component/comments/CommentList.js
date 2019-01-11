import React, { Component } from 'react';
import {Comment} from './Comment';

  export class  CommentList extends Component{
    render() {
      return (
        <div className="commentList">
          {this.props.data.map((c, id) => 
          <Comment key = {id} author={c.author} text={c.text} />
          )}
        </div>
      );
    }
  }
  
  export default CommentList;
  