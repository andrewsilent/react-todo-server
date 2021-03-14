const express = require('express')
const TaskController = require('./controllers/task.controller')
const ColumnController = require('./controllers/column.controller')
const TaskboardController = require('./controllers/taskboard.controller')
const deleteTasksByColumn = require('./middleware/deleteTasksByColumn.mw')

const app = express()

const bodyParser = express.json()

/* ROUTING */
app.get('/', (req, res, next) => {
  res.status('200').send('welcome, yeah')
})

app.get('/taskboard', bodyParser, TaskboardController.findAll)

app.get('/tasks', bodyParser, TaskController.findAll)
app.post('/task/create', bodyParser, TaskController.createTask)
app.delete('/task/:id', bodyParser, TaskController.deleteById)
app.put('/task/:id', bodyParser, TaskController.updateById)

app.get('/columns', bodyParser, ColumnController.findAll)
app.post('/column/create', bodyParser, ColumnController.createColumn)
app.delete(
  '/column/:id',
  bodyParser,
  deleteTasksByColumn,
  ColumnController.deleteById
)
app.put('/column/:id', bodyParser, ColumnController.updateById)

/* END ROUTING */

module.exports = app
