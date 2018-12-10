import { combineReducers } from 'redux'

// Custom Reducers
import counterReducer from './counterReducer'

// Combine Reducers
const reducers = combineReducers({
  counterReducer,
})

export default reducers
