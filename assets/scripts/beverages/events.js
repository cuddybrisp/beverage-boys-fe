'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')

const onBevCreate = function (event) {
  event.preventDefault()
  console.log(event.target)
  const formData = getFormFields(event.target)
  console.log(formData)
  api.createBeverage(formData)
    .then(ui.newBevSuccess)
    .catch(ui.newBevFailure)
}
const onShowBev = function (event) {
  event.preventDefault()
  console.log('onShowBev ran')
  const formData = getFormFields(event.target)
  console.log(formData)
}
const indexBev = function (event) {
  event.preventDefault()
  console.log(event.target)
  api.onIndexBev()
    .then(ui.indexSuccess)
    .catch(console.error)
}
module.exports = {
  onBevCreate,
  onShowBev,
  indexBev
}
