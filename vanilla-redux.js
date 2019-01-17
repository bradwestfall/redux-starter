const redux = require('redux')
const { combineReducers, createStore } = redux

/**
 * Setup
 */

const counterReducer = (state = {}, action) => {
  if (action.type === 'ADD') {
    state = Object.assign({}, state, { value: action.value })
    return state
  }
  return state
}

// Combine Reducers Into One Reducer
const reducers = combineReducers({ counterReducer })

// Create A Store With a Reducer(s)
const store = createStore(reducers)


/**
 * Usage
 */

console.log('Initial State', store.getState())

store.dispatch({ type: 'ADD', value: 1 })

console.log('End State', store.getState())
