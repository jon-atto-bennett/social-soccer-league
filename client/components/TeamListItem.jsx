import React from 'react'

export default React.createClass({
  render () {
    const team = this.props.team
    return (
      <div className='team-list-item'>
        {`${team.name} `}
      </div>
    )
  }
})
