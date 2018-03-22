import React, {Component} from 'react';

class ToDo extends Component {
  render(){
    return(
      <li>
        <input type="checkbox" checked={this.props.isComplete} onChange={this.props.toggleComplete} />
        <span>{this.props.description}</span>
        <button onClick={this.props.deleteTodo}> delete </button>
      </li>
    );
  }
}

export default ToDo;
