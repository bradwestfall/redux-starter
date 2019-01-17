import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import store from '../store'
// import { actions } from '../state/counterReducer2'

const HomePage = ({ count }) => {
  return (
    <Fragment>
      <button onClick={() => store.dispatch({ type: 'ADD' })}>Add</button>{' '}
      <button onClick={() => store.dispatch({ type: 'SUBTRACT' })}>Subtract</button>
      <hr />
      <h2>Count: {count}</h2>
      <Link to="/star-wars">Star Wars</Link>
    </Fragment>
  )
}

const stateToProps = ({ counterState }) => ({
  count: counterState.count
})

export default connect(stateToProps)(HomePage)
