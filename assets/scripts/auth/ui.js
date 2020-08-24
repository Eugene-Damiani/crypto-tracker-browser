const store = require('../store')

$('#change-password').hide()
$('#sign-out').hide()
$('.updateCryptoAsset').hide()
$('#getCryptoIndex').hide()

const signUpSuccess = function () {
  $('#message').text('You Are One Step Closer')
  $('form').trigger('reset')
  $('#sign-up').hide()
}

const signUpFailure = function () {
  $('#message').text('Missing Infomation Try Again')
  $('form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#message').text('Welcome to Finance 2.0')
  console.log(store)
  store.user = response.user
  console.log('store ', store)
  $('form').trigger('reset')
  $('#change-password').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#authenticated').show()
  $('.updateCryptoAsset').show()
  $('.container').show()
  $('#getCryptoIndex').show()
}

const signInFailure = function () {
  $('#message').text('Your password or username is incorrect')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#message').text('Your password has been changed')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Your new passowrd does not match')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#message').text('You have signed out')
  store.user = null
  $('form').trigger('reset')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#authenticated').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.updateCryptoAsset').hide()
  $('.container').hide()
  $('#getCryptoIndex').hide()
}

const signOutFailure = function () {
  $('#message').text('You are still signed in')
}

module.exports = {
  signUpSuccess,
  signInFailure,
  signUpFailure,
  signInSuccess,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
