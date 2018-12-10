const counterReducer = (state = { count: 0 }, action) => {
  if (action.type === 'ADD') {
    const newState = Object.assign({}, state, { count: state.count + 1 })
    console.log(newState)
    return newState
  }

  if (action.type === 'SUBTRACT') {
    const newState = Object.assign({}, state, { count: state.count - 1 })
    return newState
  }

  return state
}

export default counterReducer
