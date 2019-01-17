import React from 'react'
import { connect } from 'react-redux'
import store from '../store'
import { actions } from '../state/userReducer'

class UsersPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 1,
      name: '',
      editMode: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const { id, name } = this.state
  
    const action = this.state.editMode
      ? actions.updateUser
      : actions.addUser

    store.dispatch(action({ id, name }))
    this.setState(state => ({
      id: state.id + 1,
      name: '',
      editMode: false
    }))
  }

  render() {
    const { id, name } = this.state
    const { users } = this.props

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={e => this.setState({ id: parseInt(e.target.value) })}
            ref={this.inputId}
            placeholder="ID"
            value={id}
            />
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
            ref={this.inputName}
            placeholder="Name"
            value={name}
          />
          <button type="submit">Submit</button>
        </form>
        <hr/>
        {Array.isArray(users) && users.map(u => (
          <div key={u.id}>
            <span>({u.id}) {u.name} - </span>
            <button onClick={() => this.setState({ ...u, editMode: true })}>Edit</button>
            <button onClick={() => store.dispatch(actions.removeUser(u.id))}>Remove</button>
          </div>
        ))}
      </div>
    )
  }
}

const stateToProps = ({ userState }) => ({
  users: userState.users
})

export default connect(stateToProps)(UsersPage)
