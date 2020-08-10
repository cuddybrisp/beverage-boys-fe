'use strict'
const config = require('../config')
const store = require('../store')

const createBeverage = function (formData) {
  const beverage = formData
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/beverages',
    method: 'POST',
    data: { beverage }
  })
}
const updateBev = function (beverage) {
  return $.ajax({
    url: config.apiUrl + '/beverages/' + beverage.id,
    method: 'PATCH',
    data: { beverage: beverage },
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const onShowBev = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/beverages/' + formData,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const deleteBev = function (bevId) {
  return $.ajax({
    url: config.apiUrl + '/beverages/' + bevId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const onIndexBev = function () {
  return $.ajax({
    url: config.apiUrl + '/beverages/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  createBeverage,
  updateBev,
  onShowBev,
  onIndexBev,
  deleteBev
}
