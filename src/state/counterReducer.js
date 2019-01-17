const initialState = { count: 0 }

const counterReducer = (state = initialState, action) => {
  if (action.type === 'ADD') {
    const newState = Object.assign({}, state, { count: state.count + 1 })
    return newState
  }

  if (action.type === 'SUBTRACT') {
    const newState = Object.assign({}, state, { count: state.count - 1 })
    return newState
  }

  return state
}

export default counterReducer
