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
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/cryptos',
    method: 'POST',
    user: store.user,
    data: formData
  })
}

const updateCrypto = function (cryptoId, formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/cryptos/' + cryptoId,
    method: 'PATCH',
    data: formData
  })
}

const deleteCrypto = function (cryptoId) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/cryptos/' + cryptoId,
    method: 'DELETE'
  })
}

module.exports = {
  cryptoIndex,
  createCrypto,
  updateCrypto,
  deleteCrypto
}
