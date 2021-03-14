const { Column } = require('../models')

module.exports.createColumn = async (req, res, next) => {
  try {
    const { body } = req
    const column = await new Column(body)
    res.status(201).send(column)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}

module.exports.findAll = async (req, res, next) => {
  try {
    const columns = await Column.findAll()
    res.status(200).send({ columns: columns })
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}

module.exports.deleteById = async (req, res, next) => {
  try {
    const { params } = req
    const verdict = await Column.deleteById(params.id)
    res.status(200).send(verdict)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}

module.exports.updateById = async (req, res, next) => {
  try {
    const { body, params } = req
    const verdict = await Column.updateById(params.id, body)
    res.status(200).send(verdict)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}
