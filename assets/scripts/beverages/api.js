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
const updateBeverage = function (data) {
  return $.ajax({
    url: config.apiUrl + '/beverages/' + data.beverage.id,
    method: 'PATCH',
    data: data,
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
  updateBeverage,
  onShowBev,
  onIndexBev
}
