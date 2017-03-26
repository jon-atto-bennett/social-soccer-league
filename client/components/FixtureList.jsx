import React from 'react'
import FixtureListItem from './FixtureListItem'

export default React.createClass({
  render () {
    return (
      <div className='fixture-list'>
        <h2>Fixtures & Results</h2>
        {this.props.fixtures.map((fixture) => {
          return <FixtureListItem
            key={fixture.fixture_id}
            fixture={fixture}
            hideDetails={this.props.hideDetails}
            showDetails={this.props.showDetails} />
        })}
      </div>
    )
  }
})
