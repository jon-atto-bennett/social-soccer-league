import React from 'react'

export default React.createClass({
  render () {
    const table = this.props.table
    return (
      <tr className='table-list-item'>
        <td>{`${table.name}`}</td>
        <td>{`${table.games_played}`}</td>
        <td>{`${table.won}`}</td>
        <td>{`${table.drawn}`}</td>
        <td>{`${table.lost}`}</td>
        <td>{`${table.goals_for}`}</td>
        <td>{`${table.goals_against}`}</td>
        <td>{`${table.goal_diff}`}</td>
        <td>{`${table.points}`}</td>
      </tr>
    )
  }
})
