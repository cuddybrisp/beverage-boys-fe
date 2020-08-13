'use strict'
const store = require('../store')
const signUpSuccess = function () {
  $('#message').text('Signed up!!')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Sign up failed')
}

const signInSuccess = function (response) {
  $('#message').text('Signed In')
  store.user = response.user
  $('.authenticated').show()
  $('form').trigger('reset')
}
const signInFailure = function () {
  $('#message').text('Sign In Failed.')
}
const changePasswordFailure = function () {
  $('#message').text('Change password failed')
}
const changePasswordSuccess = function () {
  $('#message').text('Changed Password!')
  $('form').trigger('reset')
}

const signOutFailure = function () {
  $('#message').text('Signout failed')
}
const signOutSuccess = function () {
  $('#message').text('Signed Out!')
  $('.unauthenticated').show()
<<<<<<< HEAD
  $('.authenticated').hide()
=======
>>>>>>> auth-steps
  store.user = null
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOutSuccess,
  signOutFailure
}
