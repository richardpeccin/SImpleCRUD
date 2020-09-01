module.exports = app => {
  const save = (req, res) => {
    res.send('Person saved.')
  }

  return { save }
}