import React from 'react'

export default React.createClass({
  render () {
    const fixture = this.props.fixture
    return (
      <div className="fixture-list-item">
        {`${fixture.week} | ${fixture.date} | ${fixture.pitch} |  ${fixture.team_1} vs. ${fixture.team_2} | ${fixture.team_1_goals} ${fixture.team_2_goals} `} 
      </div>
    )
  }
})
