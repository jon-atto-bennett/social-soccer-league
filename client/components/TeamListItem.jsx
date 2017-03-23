import React from 'react'

export default React.createClass({
  render () {
    const team = this.props.team
    return (
      <div className="team-list-item">
        {`${team.name} `}
        <a href="#" onClick={() => this.props.showDetails(team)}>details</a>
      </div>
    )
  }
})
