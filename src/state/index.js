import { combineReducers } from 'redux'

// Custom Reducers
import counterState from './counterReducer'

// Combine Reducers
const reducers = combineReducers({
  counterState,
})

export default reducers
