module.exports = app => {
  const save = (req, res) => {
    res.send('Person saved.')
  }

  const update = (req, res) => {
    res.send('Person updated.')
  }

  return { save, update }
}