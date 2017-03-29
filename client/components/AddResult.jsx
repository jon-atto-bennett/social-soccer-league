import React from 'react'
import api from '../api'

export default React.createClass({
  getInitialState () {
    return {
      team_1: 'Loverpill',
      team_2: 'Tootem Spuds',
      team_1_goals: 4,
      team_2_goals: 2
    }
  },

  render () {
    return (
      <div className='add-result'>
        <h5>Add Result</h5>
        <form>
          <p>
            <input placeholder='team_1'
              defaultValue={this.state.team_1}
            />
          <input placeholder='Score'
              onChange={this.team_1_goalsChanged}
              value={this.state.team_1_goals}
            />
          </p>
          <p>
            <input placeholder='team_2'
              defaultValue={this.state.team_2}
            />
          <input placeholder='Score'
              onChange={this.team_2_goalsChanges}
              value={this.state.team_2_goals}
            />
          </p>
          <button onClick={this.addResult}>Add Result</button> {' '}
          <a href='#' onClick={this.props.finishAdd}>Cancel</a>
        </form>
      </div>
    )
  },

team_1_goalsChanged (e) {
    this.setState({
      team_1_goals: e.target.value
    })
  },

  team_2_goalsChanges (e) {
    this.setState({
      team_2_goals: e.target.value
    })
  },

  addResult () {
    const result = this.state
    api.appendResult(result, this.props.finishAdd)
  }
})
