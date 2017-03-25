import React from 'react'

export default React.createClass({
  render () {
    const fixture = this.props.fixture
    return (
      <div className="fixture-list-item">
        {`${fixture.name} | ${fixture.goals} | ${fixture.pitch} | ${fixture.date}`} 
      </div>
    )
  }
})
