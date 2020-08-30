module.exports = app => {
  app.route('/person')
    .post(app.api.person.save)
}