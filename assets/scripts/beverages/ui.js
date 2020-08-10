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
  console.log(data.beverage)
  const bevIndexhtml = handlebar({ beverage: data.beverage })
  $('#drink-index').append(bevIndexhtml)
  console.log(bevIndexhtml)
}

module.exports = {
  newBevSuccess,
  indexSuccess
}
