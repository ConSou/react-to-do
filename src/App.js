import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {description: 'Walk the Dog', isComplete: true},
        {description: 'Do Bloc work', isComplete: true},
        {description: 'Rock Climb', isComplete: false}
      ],
      newTodoDescription: '',
    };
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isComplete = todo.isComplete ? false : true;
    this.setState({ todos: todos });
  }

  handleSubmit(e){
    e.preventDefault();
    if(!this.state.newTodoDescription) { return };
    const newTodo = {description: this.state.newTodoDescription, isComplete: false};
    this.setState({todos: [...this.state.todos, newTodo], newTodoDescription: ''});
  }

handleChange(e){
  this.setState({newTodoDescription: e.target.value});
}

deleteTodo(index){
  const deleteArr = this.state.todos.filter(e => e !== this.state.todos[index])
  this.setState({todos: deleteArr});
  //this.setState(this.state.todos = deleteArr);
  //alert('delete has been clicked' + index);
  //console.log(deleteArr)
}


  render() {
    return (
      <div className="App">
        <ul>
          {this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={todo.description} isComplete={todo.isComplete} toggleComplete={() => this.toggleComplete(index)} deleteTodo={() => this.deleteTodo(index)}/>
          )}
        </ul>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" value={this.state.newTodoDescription} onChange={(e) => this.handleChange(e)}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}



export default App;
