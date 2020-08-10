'use strict'

const authEvents = require ('./auth/events')
const cryptoEvents = require ('./cryptos/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#getCryptoAssets').on('click', cryptoEvents.onCryptoAssets)
  $('#clearCryptoAssets').on('click', cryptoEvents.onClearAssets)
  $('#updateCryptoAsset').on('submit', cryptoEvents.onUpdateCryptoAsset)
  $('#deleteCryptoAsset').on('click', cryptoEvents.onDeleteCryptoAsset)
})
