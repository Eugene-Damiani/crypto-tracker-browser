'use strict'

const config = require('../config')
const store = require('../store')

const cryptoIndex = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/cryptos',
    method: 'GET',
    data: {
      crypto: []
    }
  })
}

const createCrypto = function (formData) {
  console.log(formData)
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/cryptos',
    method: 'POST',
    user: store.user,
    data: formData.crypto
  })
}

const updateCrypto = function (formData, cryptoId) {
  return $.ajax({
    url: config.apiUrl + '/cryptos' + cryptoId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: formData.crypto
  })
}

const deleteCrypto = cryptoId => {
  return $.ajax({
    url: config.apiUrl + '/cryptos' + cryptoId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  cryptoIndex,
  createCrypto,
  updateCrypto,
  deleteCrypto
}
