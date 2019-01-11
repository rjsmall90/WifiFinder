import React, { Component } from 'react';

export class CommentForm extends Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var authorVal = e.target[0].value.trim();
    var textVal = e.target[1].value.trim();
    if (!textVal || !authorVal) {
      return;
    }
    this.props.onCommentSubmit({author: authorVal, text: textVal});
    e.target[0].value = '';
    e.target[1].value = '';
    return;
  }
  render() {
    return(
      <form className="comment-form form-group" onSubmit={this.handleSubmit}>
        <div>
          <div className="input-groupone">
            <label htmlFor="">Name </label>  
              <input type="text" placeholder="Your name" className="form-control" />
          </div>
        <div className="input-grouptwo">
        <label htmlFor="">Comment </label>   
           <input type="text" placeholder="Say something..." className="form-control" />
        </div>
        <input type="submit" value="Post" className="btn btn-primary" />
        </div>
      </form>
    );
  }
}

export default CommentForm;
