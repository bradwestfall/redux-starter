import { createReducer, createAction } from 'redux-act'

export const actions = {
  add: createAction(),
  subtract: createAction(),
}

const initialState = {
  count: 0
}

export default createReducer({
  [actions.add]: (state) => Object.assign({}, state, { count: state.count + 1 }),
  [actions.subtract]: (state) => Object.assign({}, state, { count: state.count - 1 }),
}, initialState)

