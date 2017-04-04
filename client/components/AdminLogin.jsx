import React from 'react'
import api from '../api'

export default React.createClass({
  getInitialState () {
    return {
      username: '',
      password: ''
    }
  },

render () {
  return (
    <div className='user-name'>
      <h5>Admin Login</h5>
      <form>
        <p>
          <input placeholder='Username'
            onChange={this.usernameChanged}
            value={this.state.username}
          />
        <input placeholder='Password'
            onChange={this.passwordChanged}
            value={this.state.password}
          />
        </p>
        <button onClick={this.adminLogin}>Submit</button> {' '}
        <a href='#' onClick={this.props.finishAdd}>Cancel</a>
      </form>
    </div>
  )
},

usernameChanged (e) {
  this.setState({
    username: e.target.value
  })
},

passwordChanged (e) {
  this.setState({
    password: e.target.value
  })
},

adminLogin () {
  const credentials = {
    username: this.state.username,
    password: this.state.password
    }
    console.log(credentials)
  }
})
