import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StarWarsPage from './pages/StarWarsPage'
import store from './store'

const App = () => (
  <ReduxProvider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/star-wars" component={StarWarsPage} />
      </Switch>
    </BrowserRouter>
  </ReduxProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
