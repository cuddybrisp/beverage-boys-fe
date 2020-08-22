'use strict'
const config = require('../config')
const store = require('../store')

const createSnack = function (formData) {
  const snack = formData
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/snacks',
    method: 'POST',
    data: snack
  })
}
const updateSnack = function (snack) {
  return $.ajax({
    url: config.apiUrl + '/snacks/' + snack.id,
    method: 'PATCH',
    data: { snack: snack },
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const indexSnack = function () {
  return $.ajax({
    url: config.apiUrl + '/snacks',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const deleteSnack = function (snackId) {
  return $.ajax({
    url: config.apiUrl + '/snacks/' + snackId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  createSnack,
  updateSnack,
  indexSnack,
  deleteSnack
}
