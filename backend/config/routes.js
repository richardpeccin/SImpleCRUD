module.exports = app => {
  app.route('/person')
    .post(app.api.person.save)
    .get(app.api.person.get)

  app.route('/person/:id')
    .put(app.api.person.save)
    .get(app.api.person.getById)
    .delete(app.api.person.remove)
}