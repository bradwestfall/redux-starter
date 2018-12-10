import React from 'react'
import store from '../store'

const HomePage = () => {
  const { counterReducer } = store.getState();

  return (
    <div>
      <button onClick={() => store.dispatch({ type: 'ADD' })}>Add</button>{' '}
      <button onClick={() => store.dispatch({ type: 'SUBTRACT' })}>Subtract</button>
      <hr />
      <h2>Count: {counterReducer.count}</h2>
    </div>
  )
}

export default HomePage
