import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Todo extends Component {
   constructor(props){
       super(props);
       this.state={
           task:"",
           items:[]
       }
   }

   updateMessage(event) {
    this.setState({
      task: event.target.value
    });
  }

  handleClick() {
    var items = this.state.items;

    items.push(this.state.task);

    this.setState({
      items: items,
      task: ""
    });
  }

  handleItemDeleted(i) {
    var items = this.state.items;

    items.splice(i, 1);

    this.setState({
      items: items
    });
  }

  renderRows() {
    var context = this;

    return  this.state.items.map(function(val, index) {
              return (
                <tr key={"item-" + index}>
                    <td>{index+1}</td>
                  <td>
                    {val}
                  </td>
                  <td>
                    <button onClick={context.handleItemDeleted.bind(context, index)}>
                      Delete
                    </button>
                    <button onClick={context.handleItemDeleted.bind(context, index)}>
                      Update
                    </button>
                  </td>
                </tr>
              );
            });
  }
    render() {
        return (
            <div className="container-fluid row">
                <div className="col-md-3"></div>
               <div className="col-md-6 bg-dark text-light text-center">
                 <h1>TODO LIST</h1>

                 <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-default">ADD TASK</span>
  </div>
  <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
    value={this.state.task}
     onChange={this.updateMessage.bind(this)}/>
  
</div>
<button type="button" className="btn btn-success" onClick={this.handleClick.bind(this)} >ADD</button>


   <table className="table text-light">
       <thead>
       <tr>
      <th scope="col">SrNo</th>
      <th scope="col">Task</th>
      <th scope="col">Action</th>
      
    </tr>
       </thead>
       <tbody>
            {this.renderRows()}
          </tbody>
   </table>
               </div>
               <div className="col-md-3"></div>
            </div>
        )
    }
}

export default Todo