import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import StarWarsPage from './pages/StarWarsPage'
import store from './store'

const App = () => (
  <ReduxProvider store={store}>
    <BrowserRouter>
      <div className="app">
        <nav>
          <Link to="/">Home</Link> |{' '}
          <Link to="/users">Users</Link>
          {/* <Link to="/star-wars">Star Wars</Link> */}
          <hr/>
        </nav>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/users" component={UsersPage} />
          {/* <Route path="/star-wars" component={StarWarsPage} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  </ReduxProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
