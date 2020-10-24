const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      debugger;
      let stateValue
      if (state.length === 0){
        stateValue = [
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      } else {
        stateValue = [
          ...state.todos.todos,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      }

      return {
          date: Date.now(),
          todos: stateValue
      }
    case 'UPDATE_TODOS':
      console.log('#action.state', action)
      return action.state
    case 'TOGGLE_TODO':
      return state.todos.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return {
        date: Date.now(),
        todos: state
      }
  }
}

export default todos
