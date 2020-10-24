import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import { loadState, saveState } from './localStorage'
const persistedState = loadState()
const store = createStore(rootReducer, persistedState)

store.subscribe((d)=>{
  console.log('#d', d)
  const currentLocalStorageState = loadState()
  const currentReduxState = store.getState()

  debugger;
  if( currentLocalStorageState === undefined || currentReduxState.todos.date > currentLocalStorageState.todos.date ) {
      saveState(store.getState())
  }

})
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
