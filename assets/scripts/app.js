'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const bevEvents = require('./beverages/events')
const snackEvents = require('./snacks/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.authenticated').hide()
  $('#returning').on('click').show('.authenticated')
  $('#sign-up').on('submit', authEvents.onSignup)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  // $('#newbeverage').on('click', (event) => { event.preventDefault() $('.beverage-log').show() })
  $('#bev-create').on('submit', bevEvents.onBevCreate)
  $('#show-beverage').on('click', bevEvents.onShowBev)
  $('#bev-index').on('click', bevEvents.indexBev)
  $('#drink-index').on('click', '.btn.btn-danger', bevEvents.onDeleteBev)
  $('#update-bev').on('submit', bevEvents.onUpdateBev)
  $('#snack-create').on('submit', snackEvents.onCreateSnack)
  $('#update-snack').on('submit', snackEvents.onUpdateSnack)
  $('#snax-index').on('click', '.btn.btn-danger', snackEvents.onDeleteSnack)
})
