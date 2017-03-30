import React from 'react'

import AddResult from './AddResult'

export default React.createClass({
  render () {
    const fixture = this.props.fixture
    return (
      <tr className='fixture-list-item'>
        <td className='row'>{`${fixture.week}`}</td>
        <td className='row'>{`${fixture.date}`}</td>
        <td className='row'>{`${fixture.pitch}`}</td>
        <td className='row'>{`${fixture.team_1}`} vs {`${fixture.team_2}`}</td>
        <td className='row'><a href='#' onClick={() =>
            this.props.showAddResult(fixture)}>
            {`${fixture.team_1_goals}`} - {`${fixture.team_2_goals}`}</a></td>
      </tr>
    )
  }
})
