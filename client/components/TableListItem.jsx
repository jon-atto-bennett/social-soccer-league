import React from 'react'

export default React.createClass({
  render () {
    const table = this.props.table
    return (
      <tr className='table-list-item'>
        <td>{`${table.name}`}</td>
        <td className='row'>{`${table.games_played}`}</td>
        <td className='row'>{`${table.won}`}</td>
        <td className='row'>{`${table.drawn}`}</td>
        <td className='row'>{`${table.lost}`}</td>
        <td className='row'>{`${table.goals_for}`}</td>
        <td className='row'>{`${table.goals_against}`}</td>
        <td className='row'>{`${table.goal_diff}`}</td>
        <td className='row'>{`${table.points}`}</td>
      </tr>
    )
  }
})
