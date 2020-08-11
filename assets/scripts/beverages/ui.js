'use strict'

const store = require('../store')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const handlebar = require('../templates/bevindex.handlebars')

const newBevSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('New Bev Logged 🤙')
}
const indexSuccess = function (data) {
  $('#drink-index').empty()
  const bevIndexhtml = handlebar({ beverage: data.beverage })
  $('#drink-index').html(bevIndexhtml)
  if (data.beverage.length === 0) {
    $('#message').text('We need to make a bev first')
  }
}
const indexFail = function () {
  $('#message').text('Error occurred, cant show the Bevs')
}
const updateSuccess = function () {
  $('form').trigger('reset')
  $('#update-message').text('Beverage Updated 🤙')
}
const updateFail = function () {
  $('#message').text('Update failed')
}
const deleteFail = function () {
  $('#message').text('Somethings wrong, cant delete this')
}
const deleteSuccess = function () {
  $('#update-message').text('That Bev is gone')
}
module.exports = {
  newBevSuccess,
  indexSuccess,
  updateSuccess,
  updateFail,
  deleteFail,
  indexFail,
  deleteSuccess
}
