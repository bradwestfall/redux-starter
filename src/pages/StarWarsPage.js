import React from 'react'
import axios from 'axios'
// import { connect } from 'react-redux'
// import store from '../store'
// // import { actions } from '../state/counterReducer2'

class StarWarsPage extends React.Component {
  state = { people: null }

  componentDidMount() {
    axios.get('https://swapi.co/api/people/')
      .then(res => this.setState({ people: res.data.results }))
  }

  render() {
    const { people } = this.state

    return (
      <div>
        {Array.isArray(people) && people.map(p => (
          <div key={p.name}>{p.name}</div>
        ))}
      </div>
    )
  }
}

// const stateToProps = ({ counterState }) => ({
//   count: counterState.count
// })

export default StarWarsPage
