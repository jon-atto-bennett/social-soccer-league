import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className="fixture-list">
      <h2>Fixtures & Results</h2>
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
