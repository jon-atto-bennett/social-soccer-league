import React from 'react'
import FixtureListItem from './FixtureListItem'

export default React.createClass({
  render () {
    return (
      <div className='fixture-list'>
        <h2>Fixtures & Results</h2>
        <table>
          <thead>
            <tr>
              <th className='row'>Week</th>
              <th className='row'>Date</th>
              <th className='row'>Pitch</th>
              <th className='row'>Teams</th>
              <th className='row'>Result</th>
            </tr>
          </thead>
          <tbody>
            {this.props.fixtures.map((fixture) => {
              return <FixtureListItem
                key={fixture.fixture_id}
                fixture={fixture}
                hideDetails={this.props.hideDetails}
                showAddResult={this.props.showAddResult} />
            })}
          </tbody>
        </table>
      </div>
    )
  }
})
