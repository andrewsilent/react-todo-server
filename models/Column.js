const db = new Map()

class Column {
  constructor ({
    id = Date.now(),
    title = 'Column #',
    updatedAt = new Date()
  }) {
    this.id = String(id)
    this.title = title
    this.createdAt = new Date()
    this.updatedAt = updatedAt

    db.set(this.id, this)
    return Promise.resolve(this)
  }
}

Column.deleteById = async id => {
  return db.delete(id)
}

Column.findById = async id => {
  return db.get(id)
}

Column.findAll = async () => {
  return [...db.values()]
}

Column.updateById = async (id, column) => {
  const oldColumn = await Column.findById(id)
  const newColumn = { ...oldColumn, ...column, updatedAt: new Date() }
  const deleteOldColumn = await Column.deleteById(id)
  return db.set(id, newColumn)
}

module.exports = Column
