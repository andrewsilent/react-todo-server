const { Task } = require('../models')

module.exports = async (req, res, next) => {
  try {
    const { params } = req
    const verdict = await Task.deleteByColumn(params.id)
    next()
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}