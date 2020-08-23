'use strict'

const authEvents = require('./auth/events')
const cryptoEvents = require('./cryptos/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#cryptoIndex').on('click', cryptoEvents.onIndexCrypto)
  $('#updateCryptoAsset').on('submit', cryptoEvents.onCryptoUpdate)
  // Need to add delete button to my HTML or handlebars
  $('#deleteCryptoAsset').on('click', cryptoEvents.onDeleteCrypto)
  $('#createCrypto').on('submit', cryptoEvents.onCreateCrypto)
})
