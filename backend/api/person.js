module.exports = app => {
  const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation


  const save = async (req, res) => {

    const person = { ...req.body }

    if(req.params.id) person.id = req.params.id

    try {
      existsOrError(person.name, "Nome não informado." )
      existsOrError(person.cpf, "CPF não informado.")
      existsOrError(person.email, "Email não informado.")

      const personFromDB = await app.db('person')
        .where({ email: person.email})
      if(!person.id) {
        notExistsOrError(userFromDB, 'Usuário já cadastrado.')
      }
    } catch {
      return res.status(400).send(msg)
    }

    if(person.id) {
      app.db('person')
        .update(person)
        .where({ id: person.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err))
    } else {
      app.db('person')
        .insert(person)
        .then(_ => res.status(204).send())
        .catch(err => res.statu(500).send(err))
    }

  }

  const get = (req, res) => {
    app.db('person')
      .select('id', 'name', 'cpf', 'email', 'celular', 'note')
      .then(persons =>res.json(persons))
      .catch(err => res.status(500).send(err))
  }


  const getById = async (req, res) => {
    app.db('person')
    .select('id', 'name', 'cpf', 'email', 'celular', 'note')
    .where({ id: req.params.id })
    .first()
    .then(person => res.json(person))
    .catch(err => res.status(500).send(err))
  }


  const remove = async (req, res) => {
    try {
      const rowsDeleted = await app.db('person')
                                  .where({ id: req.params.id }).del()
      existsOrError(rowsDeleted, 'Pessoa não encontrada.')

      res.status(204).send()
    } catch(msg) {
      res.status(400).send(msg)
    }
  }

  return { save, getById, get, remove }
}