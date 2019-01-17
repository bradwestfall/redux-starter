import { createReducer, createAction } from 'redux-act'

export const actions = {
  addUser: createAction(),
  removeUser: createAction(),
  updateUser: createAction()
}

const initialState = {
  users: []
}

export default createReducer({
  [actions.addUser]: (state, user) => {
    return { ...state, users: state.users.concat(user) }
  },
  [actions.removeUser]: (state, id) => {
    const u = state.users
    const i = u.findIndex(user => user.id === id)
    return { ...state, users: [...u.slice(0, i), ...u.slice(i + 1)] }
  },
  [actions.updateUser]: (state, user) => {
    const u = state.users
    const i = u.findIndex(u => u.id === user.id)
    return { ...state, users: [...u.slice(0, i), user, ...u.slice(i + 1)] }
  },
}, initialState)

