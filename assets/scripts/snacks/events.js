'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateSnack = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createSnack(formData)
    .then(ui.newSnackSuccess)
    .catch(ui.newSnackFailure)
}
const onUpdateSnack = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const snack = data
  api.updateSnack(snack)
    .then(() => onIndexSnack(event))
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}
const onIndexSnack = function (event) {
  event.preventDefault()
  api.indexSnack()
    .then(ui.indexSuccess)
    .catch(ui.indexFail)
}
const onDeleteSnack = function (event) {
  event.preventDefault()
  const snackId = $(event.target).data('id')
  api.deleteSnack(snackId)
    .then(() => onIndexSnack(event))
    .then(ui.deleteSuccess)
    .catch(ui.deleteFail)
}
module.exports = {
  onCreateSnack,
  onUpdateSnack,
  onIndexSnack,
  onDeleteSnack
}
