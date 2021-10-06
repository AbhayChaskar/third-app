import React, { Component } from 'react'
import Commenthoc from './Commenthoc';
export class Comment extends Component {
    render() {
        return (
            <div>
               <p>{this.props.CountNumber}</p> 
               <button onClick={this.props.handleClick}>Comments</button>
            </div>
        )
    }
}
const MyComment=Commenthoc(Comment,1)
export default MyComment;
