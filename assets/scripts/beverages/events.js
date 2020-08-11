'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')

const onBevCreate = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createBeverage(formData)
    .then(ui.newBevSuccess)
    .catch(ui.newBevFailure)
}
// const onShowBev = function (event) {
//   event.preventDefault()
//   const formData = getFormFields(event.target)
// }
const indexBev = function (event) {
  event.preventDefault()
  api.onIndexBev()
    .then(ui.indexSuccess)
    .catch(ui.indexFail)
}
const onDeleteBev = function (event) {
  event.preventDefault()
  const bevId = $(event.target).data('id')
  api.deleteBev(bevId)
    .then(() => indexBev(event))
    .then(ui.deleteSuccess)
    .catch(ui.deleteFail)
}
const onUpdateBev = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const beverage = data
  api.updateBev(beverage)
    .then(ui.updateSuccess)
    .then(() => indexBev(event))
    .catch(ui.updateFail)
}
module.exports = {
  onBevCreate,
  indexBev,
  onDeleteBev,
  onUpdateBev
}
