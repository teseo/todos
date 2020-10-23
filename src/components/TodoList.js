import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import {loadState} from "../localStorage";
//create your forceUpdate hook
function updateTodosLocalState(todos){

}

const TodoList = ({ todos, toggleTodo }) => {
  let  [localTodos,setState]=useState(todos);
  function handleUpdate(todos) {
    //passing empty object will re-render the component
    const parsedTodos = JSON.parse(todos)
    setState(parsedTodos.todos);
  }

  window.addEventListener('storage', function (event) {
    debugger;
    console.log('#hey no')
    handleUpdate(event.newValue)
  });
  return(
    <ul>
      {localTodos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  updateTodos: PropTypes.func.isRequired
}

export default TodoList
