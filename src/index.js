import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Router from 'utils/Router'
import HomePage from 'pages/HomePage'
import store from './store'

const App = () => (
  <ReduxProvider store={store}>
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  </ReduxProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
