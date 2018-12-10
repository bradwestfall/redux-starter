import React from 'react'
import store from '../store'

const HomePage = () => (
  <div>
    <button onClick={() => store.dispatch({ type: 'ADD_USER' })}>Redux</button>
  </div>
)

export default HomePage
