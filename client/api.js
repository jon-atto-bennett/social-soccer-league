import request from 'superagent'

var teamsUrl = 'http://localhost:3000/teams'

export default {
  getTeams: getTeams,
  // appendWidget: appendWidget
}

function getTeams (callback) {
  request
    .get(teamsUrl)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

// function appendWidget (widget, callback) {
//   request
//     .post(widgetUrl)
//     .send(widget)
//     .end(function (err, res) {
//       if (err) {
//         callback(err)
//       } else {
//         callback()
//       }
//     })
// }
