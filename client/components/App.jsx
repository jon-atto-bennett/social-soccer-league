import React from 'react'

import api from '../api'
import TeamList from './TeamList'
import ErrorMessage from './ErrorMessage'

export default React.createClass({
  getInitialState () {
    return {
      error: null,
      teams: []
    }
  },

  componentDidMount () {
    api.getTeams(this.renderWidgets)
  },

  renderTeams (err, teams) {
    this.setState({
      error: err,
      teams: teams
    })
  },

  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />
        <h1>Social Soccer League</h1>
        <TeamList
          showDetails={this.showDetails}
          teams={this.state.teams} />
      </div>
    )
  }
})
