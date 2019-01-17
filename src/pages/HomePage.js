import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import store from '../store'

const HomePage = ({ count }) => {
  return (
    <Fragment>
      <button onClick={() => store.dispatch({ type: 'ADD' })}>Add</button>{' '}
      <button onClick={() => store.dispatch({ type: 'SUBTRACT' })}>Subtract</button>
      <hr />
      <h2>Count: {count}</h2>
    </Fragment>
  )
}

const stateToProps = ({ counterState }) => ({
  count: counterState.count
})

export default connect(stateToProps)(HomePage)
