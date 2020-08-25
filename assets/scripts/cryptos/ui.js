'use strict'

const showCryptoAsset = require('../templates/crypto-assets.handlebars')

const getCryptoIndexSuccess = (data) => {
  console.log(data)
  const showCryptoHtml = showCryptoAsset({ cryptos: data.cryptos })
  $('#message').text('Welcome To Your Tracker')
$('#content').show(data)
  $('.content').append(showCryptoHtml)
}

const getCryptoIndexFailure = function () {
  $('#message').text('Failed To Load')
}

const createCryptoSuccess = (data) => {
  $('form').trigger('reset')
  $('#message').text('New Asset Added!')
}

const createCryptoFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Did Not Populate')
}

const updateCryptoSuccess = function () {
  $('form').trigger('reset')
  $('#update-message').text('Asset Updated!')
}

const updateCryptoFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Update failed :(')
}

const deleteCryptoSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('Asset Deleted')
}

const deleteCryptoFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Delete Asset Failed!')
}

module.exports = {
  getCryptoIndexSuccess,
  getCryptoIndexFailure,
  createCryptoSuccess,
  createCryptoFailure,
  updateCryptoSuccess,
  updateCryptoFailure,
  deleteCryptoSuccess,
  deleteCryptoFailure
}
