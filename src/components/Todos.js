import React from 'react';
import TodoItems from './TodoItem'
import PropTypes from 'prop-types';

class Todos extends React.Component {
  render() {
      return this.props.todos.map((todo) => (
          <TodoItems key={todo.id} todo={todo}/>
      )) ;

    return (
      <div >
        <h1> Todos</h1>
      </div>
    )
  }
}
  Todos.propTypes = {
      todos: PropTypes.array.isRequired
  }

export default Todos;
