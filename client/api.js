import request from 'superagent'

var teamsUrl = 'http://localhost:3000'

export default {
  getTeams: getTeams,
  getFixtures: getFixtures
  // appendWidget: appendWidget
}

function getTeams (callback) {
  request
    .get(teamsUrl + '/teams')
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function getFixtures (callback) {
  request
    .get(teamsUrl + '/fixtures')
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}
function appendWidget (widget, callback) {
  request
    .post(widgetUrl)
    .send(widget)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback()
      }
    })
}
