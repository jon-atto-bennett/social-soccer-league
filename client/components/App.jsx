import React from 'react'

import api from '../api'
import AddResult from './AddResult'
import TeamList from './TeamList'
import FixtureList from './FixtureList'
import TableList from './TableList'
import ErrorMessage from './ErrorMessage'

export default React.createClass({
  getInitialState () {
    return {
      error: null,
      teams: [],
      fixtures: [],
      table: [],
      activeFixture: {},
      teamListVisible: false,
      fixtureListVisible: false,
      tableListVisible: false,
      addResultVisible: false
    }
  },

  componentDidMount () {
    api.getTeams(this.renderTeams)
    api.getFixtures(this.renderFixtures)
    api.getTable(this.renderTable)
  },

  renderTeams (err, teams) {
    this.setState({
      error: err,
      teams: teams
    })
  },

  renderFixtures (err, fixtures) {
    this.setState({
      error: err,
      fixtures: fixtures
    })
  },

  renderTable (err, table) {
    this.setState({
      error: err,
      table: table.sort((a, b) => {
        if (a.points !== b.points) {
          return (b.points - a.points)
        } else {
          return (b.goal_diff - a.goal_diff)
        }
      })
    })
  },

  showAddResult (fixture) {
    this.setState({
      addResultVisible: true,
      fixtureListVisible: false,
      activeFixture: fixture
    })
  },

  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />
        <h1>Social Soccer League</h1>
        <h5>
          <a href='#' onClick={this.hideAll}>Home</a>
          <a href='#' onClick={this.showTeams}>Teams</a>
          <a href='#' onClick={this.showFixtures}>Fixtures & Results</a>
          <a href='#' onClick={this.showTable}>Table</a>
          <a href='#' onClick={this.showTable}>Top Scorers</a>
        </h5>
        {this.state.teamListVisible && <TeamList
          showDetails={this.showDetails}
          teams={this.state.teams} />}
        {this.state.fixtureListVisible && <FixtureList
          showAddResult={this.showAddResult}
          fixtures={this.state.fixtures} />}
        {this.state.addResultVisible && <AddResult
          finishAdd={this.showFixtures}
          fixture={this.state.activeFixture} />}
        {this.state.tableListVisible && <TableList
          table={this.state.table} />}
      </div>
    )
  },

  showTeams () {
    this.setState({
      teamListVisible: true,
      fixtureListVisible: false,
      tableListVisible: false
    })
  },

  showFixtures () {
    this.setState({
      fixtureListVisible: true,
      teamListVisible: false,
      tableListVisible: false,
      addResultVisible: false
    })
  },

  showTable () {
    this.setState({
      tableListVisible: true,
      fixtureListVisible: false,
      teamListVisible: false
    })
  },

  hideAll () {
    this.setState({
      teamListVisible: false,
      fixtureListVisible: false,
      tableListVisible: false
    })
  }
})
