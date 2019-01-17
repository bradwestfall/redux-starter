import React from 'react'
import { connect } from 'react-redux'
import store from '../store'
// import { actions } from '../state/counterReducer2'

const HomePage = ({ count }) => {
  return (
    <div>
      <button onClick={() => store.dispatch({ type: 'ADD' })}>Add</button>{' '}
      <button onClick={() => store.dispatch({ type: 'SUBTRACT' })}>Subtract</button>
      <hr />
      <h2>Count: {count}</h2>
    </div>
  )
}

const stateToProps = ({ counterState }) => ({
  count: counterState.count
})

export default connect(stateToProps)(HomePage)
