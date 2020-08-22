'use strict'

const showCryptoAssets = require('../templates/crypto-assets.handlebars')

$('#getCryptoAssets').hide()
// $('#clearCryptoAssets').hide()

const getCryptoSuccess = (data) => {
  console.log(data)
  const showCryptoIndex = showCryptoAssets({ crypto: data.crypto })

  if (data.crypto.length === 0) {
    $('#message').text('Start Trading You Have Zero Assets')
  } else {
    $('.content').html(showCryptoIndex)
    $('#message').text('Here is Your Crypto')
  }
  // $('#content').empty()
  // $('#content').append(showCryptoIndex)
  // $('#content').show()
}

const getCryptoFailure = function () {
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
  $('#message').text('Asset Updated!')
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
  getCryptoSuccess,
  getCryptoFailure,
  createCryptoSuccess,
  createCryptoFailure,
  updateCryptoSuccess,
  updateCryptoFailure,
  deleteCryptoSuccess,
  deleteCryptoFailure
}
