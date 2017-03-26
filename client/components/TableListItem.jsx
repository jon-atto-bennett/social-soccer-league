import React from 'react'

export default React.createClass({
  render () {
    const table = this.props.table

    return (
      <div className='table-list-item'>
        {`${table.name} | ${table.games_played} | ${table.won} |  ${table.drawn} | ${table.lost} | ${table.goals_for} | ${table.goals_against} | ${table.goal_diff} | ${table.points} `}
      </div>
    )
  }
})
