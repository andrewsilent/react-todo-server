const { Task } = require('../models')
const { deleteById } = require('./column.controller')

module.exports.createTask = async (req, res, next) => {
  try {
    const { body } = req
    const task = await new Task(body)
    res.status(201).send(task)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}

module.exports.findAll = async (req, res, next) => {
  try {
    const tasks = await Task.findAll()
    res.status(200).send({ tasks: tasks })
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}

module.exports.deleteById = async (req, res, next) => {
  try {
    const { params } = req
    const verdict = await Task.deleteById(params.id)
    res.status(200).send(verdict)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}

module.exports.deleteByColumn = async (req, res, next) => {
  try {
    const { params } = req
    const verdict = await Task.deleteByColumn(params.id)
    res.status(200).send(verdict)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}

module.exports.updateById = async (req, res, next) => {
  try {
    const { body, params } = req
    const verdict = await Task.updateById(params.id, body)
    res.status(200).send(verdict)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}
