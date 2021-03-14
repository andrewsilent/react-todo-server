const express = require('express')
const TaskController = require('./controllers/task.controller')
const app = express()

const bodyParser = express.json()

/* ROUTING */
app.get('/', (req, res, next) => {
  res.status('200').send('welcome, yeah')
})

app.get('/tasks', bodyParser, TaskController.findAll)
app.post('/task/create', bodyParser, TaskController.createTask)
app.delete('/task/:id', bodyParser, TaskController.deleteById)
app.put('/task/:id', bodyParser, TaskController.updateById)

/* END ROUTING */

module.exports = app
