import React from 'react'
import { connect } from 'react-redux'

// import { addTeam } from '../actions'

import Team from '../components/Team'

function Teams (props) {
  const teamList = props.Teams

  return (
    <div>
      <h2>Team List</h2>
      {teamList.map(teamObject =>
        <Team key={teamObject.id} team={teamObject.team} />)
      }

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    teams: state.teams
  }
}

const provideCorrectProps = connect(mapStateToProps)
const connectedTeams = provideCorrectProps(Teams)

export default connectedTeams
