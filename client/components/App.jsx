import React from 'react'

import api from '../api'
import TeamList from './TeamList'
import FixtureList from './FixtureList'
import ErrorMessage from './ErrorMessage'

export default React.createClass({
  getInitialState () {
    return {
      error: null,
      teams: [],
      fixtures: [],
      teamListVisible: false,
      fixtureListVisible: false
    }
  },

  componentDidMount () {
    api.getTeams(this.renderTeams),
    api.getFixtures(this.renderFixtures)
  },

  renderTeams (err, teams) {
    this.setState({
      error: err,
      teams: teams
    })
  },

  renderFixtures (err, fixtures ) {
    this.setState({
      error: err,
      fixtures: fixtures
    })
  },


  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />
        <h1>Social Soccer League</h1>
          <h2>
            <a href='#' onClick={this.hideAll}>Home</a>
            <a href='#' onClick={this.showTeams}>|Teams</a>
            <a href='#' onClick={this.showFixtures}>|Fixtures & Results</a>
          |Table | Top Scorers</h2>
        {this.state.teamListVisible && <TeamList
          showDetails={this.showDetails}
          teams={this.state.teams} />}
        {this.state.fixtureListVisible && <FixtureList
          fixtures={this.state.fixtures} />}
      </div>
    )
  },

  showTeams () {
    this.setState({
      teamListVisible: true,
      fixtureListVisible: false
    })
  },

  showFixtures () {
    this.setState({
      fixtureListVisible: true,
      teamListVisible: false,
    })
  },

  hideAll () {
    this.setState({
      teamListVisible: false,
      fixtureListVisible: false
    })
  }
})
