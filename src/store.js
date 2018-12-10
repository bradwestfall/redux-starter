import { createStore, compose } from 'redux'
import reducers from './state'

const store = createStore(
  reducers,
  compose( // for multiple enhancers
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)

export default store
