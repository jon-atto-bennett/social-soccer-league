import React from 'react'

export default React.createClass({
  render () {
    const table = this.props.table
    return (
      <div className='table-list-item'>
        <tbody>
        <th>{`${table.name}`}</th>
        <th>{`${table.games_played}`}</th>
        <th>{`${table.won}`}</th>
        <th>{`${table.drawn}`}</th>
        <th>{`${table.lost}`}</th>
        <th>{`${table.goals_for}`}</th>
        <th>{`${table.goals_against}`}</th>
        <th>{`${table.goal_diff}`}</th>
        <th>{`${table.points}`}</th>
        </tbody>
      </div>
    )
  }
})
