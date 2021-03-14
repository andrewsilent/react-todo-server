const { Task, Column } = require('../models')

module.exports.findAll = async (req, res, next) => {
  try {
    const tasks = await Task.findAll()
    const columns = await Column.findAll()
    const result = { version: "1", result: {tasks: tasks, columns: columns}}
    res.status(200).send(result)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}
