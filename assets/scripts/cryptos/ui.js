'use strict'

const showCryptoAsset = require ('../templates/crypto-assets.handlebars')

$('#getCryptoAssets').hide()
$('#clearCryptoAssets').hide()

const getCryptoSuccess = (data) => {
  console.log(data)
  const showCryptoHtml = showCryptoAsset({ cryptos: data.crypto })
  $('.content').append(showCryptoHtml)
  $('#message').text('Welcome To Your Tracker')
}

const getCryptoFailure = function () {
  $('#message').text('Failed To Load')
}

const clearCryptoSuccess = () => {
  $('.content').empty()
  $('#message').text('Private Mode')
}

const clearCryptoFailure = () => {
  $('#message').text('Failed To Clear')
}

const createCryptoSuccess = (data) => {
  $('form').trigger('reset')

  $('#message').text('New Asset Added!')

  const newCrypto = (`
    <h3>Asset: ${data.crypto.asset}</h3>
    <p>Amount: ${data.crypto.amount}</p>
    <p>Exchange: ${data.crypto.exchange}</p>
      `)
  $('#content').html(newCrypto)
}

const createCryptoFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Did Not Populate')
}

const updateCryptoSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('New Asset Added!')
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
  clearCryptoSuccess,
  clearCryptoFailure,
  createCryptoSuccess,
  createCryptoFailure,
  updateCryptoSuccess,
  updateCryptoFailure,
  deleteCryptoSuccess,
  deleteCryptoFailure
}
