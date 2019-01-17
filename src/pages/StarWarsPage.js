import React from 'react'
import axios from 'axios'

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

export default StarWarsPage
