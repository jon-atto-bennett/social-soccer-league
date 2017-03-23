import React from 'react'
import TeamListItem from './TeamListItem'

export default React.createClass({
  render () {
    return (
      <div className="team-list">
      <h2>Teams</h2>
      {this.props.teams.map((team) => {
        return <TeamListItem
          key={team.team_id}
          team={team}
          hideDetails={this.props.hideDetails}
          showDetails={this.props.showDetails} />
      })}
      </div>
    )
  }
})
