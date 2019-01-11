
import React, { Component } from 'react';
import {CommentList} from './CommentList'
import {CommentForm} from './CommentForm'


export default class  CommentBox extends Component{
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
          data: []
        }
       this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
      }
      getInitialState() {
              return {
                data : this.state.data
              }
            }
            handleCommentSubmit(comment) {
              this.state.data.push(comment);
              var comments = this.state.data;
              this.setState({data: comments});
            }
            render() {
              return (
                
                <div className="comment-box">
                   <h2 className ="box">Write A Review</h2>
                  <CommentForm data={this.state.data} onCommentSubmit={this.handleCommentSubmit} />
                  <CommentList data={this.state.data} />
                </div>
              );
            }
}
