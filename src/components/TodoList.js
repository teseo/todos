import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => {
  console.log("#todos", todos)
  let  [localTodos,setState]=useState(todos.todos);
  function handleUpdate(todos) {
    //passing empty object will re-render the component
    const parsedTodos = JSON.parse(todos)
    console.log('#parsedTodos', parsedTodos)
    setState(parsedTodos.todos.todos);
  }

  window.addEventListener('storage', function (event) {
    debugger;
    console.log('#hey no')
    handleUpdate(event.newValue)
  });
  console.log('#localTodos', localTodos)
  return(
    <ul>
      {todos.todos.map(todo =>
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
  todos: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  updateTodos: PropTypes.func.isRequired
}

export default TodoList
