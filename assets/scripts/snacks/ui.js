'use strict'

const store = require('../store')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const handlebar = require('../templates/snackindex.handlebars')

const newSnackSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('New Snack Logged')
}
const newSnackFailure = function () {
  $('form').trigger('reset')
  $('#update-message').text('Logging snack failed')
}
const indexSuccess = function (data) {
  $('#snax-index').empty()
  const snackIndexHtml = handlebar({
    snack: data.snack
  })
  $('#snax-index').html(snackIndexHtml)
  if (data.snack.length === 0) {
    $('#message').text('Make a snack before showing them')
  }
}
const indexFail = function () {
  $('#message').text('Error occurred, cant show the snacks')
}
const updateSuccess = function () {
  ('form').trigger('reset')
  $('#update-message').text('Snack Updated')
}
const updateFail = function () {
  $('#message').text('Update failed :()')
}
const deleteFail = function () {
  $('#message').text('Somethings wrong, cant delete this')
}
const deleteSuccess = function () {
  $('#update-message').text('That snack is outta here')
}

module.exports = {
  newSnackSuccess,
  newSnackFailure,
  indexSuccess,
  indexFail,
  updateSuccess,
  updateFail,
  deleteFail,
  deleteSuccess
}
