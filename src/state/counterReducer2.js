import { createReducer, createAction } from 'redux-act'
// import store from '../store'

const actions = {
  add: createAction(),
  subtract: createAction(),
}

const initialState = {
  count: 0
}

export default createReducer({
  [actions.add]: (state, amount) => Object.assign({}, state, { count: state.count + amount }),
  [actions.subtract]: (state, amount) => Object.assign({}, state, { count: state.count - amount }),
}, initialState)
