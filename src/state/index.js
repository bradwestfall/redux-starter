import { combineReducers } from 'redux'

// Custom Reducers
import counterReducer from './counterReducer'
import userReducer from './userReducer'

// Combine Reducers
const reducers = combineReducers({
  counterState: counterReducer,
  userState: userReducer
})

export default reducers
