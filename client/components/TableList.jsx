import React from 'react'
import TableListItem from './TableListItem'

export default React.createClass({
  render () {
    return (
      <div className='table-list'>
        <h2>Table</h2>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Played</th>
              <th>Won</th>
              <th>Drawn</th>
              <th>Lost</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Points</th>
            </tr>
          </thead>
          </table>
          {this.props.table.map((table) => {
        return <TableListItem
            key={table.team_id}
            table={table}
            hideDetails={this.props.hideDetails}
            showDetails={this.props.showDetails} />

        })}
      </div>
    )
  }
})
