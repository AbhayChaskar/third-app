import React, { Component } from 'react'
import Counterhoc from './Counterhoc'

export class Counter extends Component {
    render() {
        return (
            <div>
               <p>{this.props.CountNumber}</p> 
               <button onClick={this.props.handleClick}>Likes</button>
            </div>
        )
    }
}
const MyCounter=Counterhoc(Counter,2)
export default MyCounter;
