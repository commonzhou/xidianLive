var express = require('express')
var config = require('./config')
var bodyParser = require('body-parser')
var exec = require('child_process').exec
var fs = require('fs')

var server = express()
server.use(bodyParser.json())
var pulling = false

server.post('/payload', function (req, res) {
  console.log(req.body)
  if (pulling) return res.status(500).send({
      message: 'Server is pulling code!'
    })
  pulling = true
  exec(`git pull && npm run build`, function (err) {
    pulling = false
    if (!err) {
      console.log(process.cwd())
      return res.send({
        code: 0
      })
    } else {
      console.log(err)
      return res.status(500).send({
        message: err
      })
    }
  })
})

server.listen(3000, function () {
  console.log('server has listened on port 3000 successfully')
})
