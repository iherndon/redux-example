import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './ducks/todos';

class App extends Component {
  state = {
    todoText: ''
  }
  
  handleClick = () => {
    const { addTodo } = this.props;
    const { todoText } = this.state;
    addTodo({ text: todoText });
    this.setState({ todoText: ''});
  }

  handleChange = ({ target: { value }}) => {
    this.setState({ todoText: value });
  }

  handleToggle = ({ target: { dataset : { id }}}) => {
    const { toggleTodo } = this.props;
    toggleTodo(id);
  }

  render() {
    const { todos } = this.props;
    const { handleClick, handleChange, handleToggle } = this;
    const { todoText } = this.state;
    return (
      <Fragment>
        <ul>
          {
            todos.map(({id, text, completed}) => 
            (<li key={id} className={completed ? 'complete' : ''}>
                {text} <input type="checkbox" value={completed} data-id={id} onChange={handleToggle} />
              </li>)
            
          )}
        </ul>
        <input type="text" onChange={handleChange} value={todoText}/>
        <button onClick={handleClick}>Add Todo</button>
      </Fragment>)
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
