const db = new Map()

class Task {
  constructor ({
    id = Date.now(),
    column = Date.now(),
    title = 'Task #',
    isDone = false,
    updatedAt = new Date()
  }) {
    this.id = String(id)
    this.column = String(column)
    this.title = title
    this.isDone = isDone
    this.createdAt = new Date()
    this.updatedAt = updatedAt

    db.set(this.id, this)
    return Promise.resolve(this)
  }
}

Task.deleteById = async id => {
  return db.delete(id)
}

Task.deleteByColumn = async colID => {
  const TasksToDelete = [...db.values()]
    .filter(task => task.column === colID)
    .map(task => task.id)
  if (!TasksToDelete) {
    return 'Column is empty'
  }
  return TasksToDelete.map(id => db.delete(id))
}

Task.findById = async id => {
  return db.get(id)
}

Task.findAll = async () => {
  return [...db.values()]
}

Task.updateById = async (id, task) => {
  const oldTask = await Task.findById(id)
  const newTask = { ...oldTask, ...task, updatedAt: new Date() }
  const deleteOldTask = await Task.deleteById(id)
  return db.set(id, newTask)
}

module.exports = Task
