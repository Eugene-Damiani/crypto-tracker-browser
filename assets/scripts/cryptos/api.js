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
    data: formData
  })
}

const updateCrypto = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/cryptos/' + formData.crypto.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      crypto: {
        asset: formData.crypto.asset,
        amount: formData.crypto.amount,
        exchange: formData.crypto.exchange
      }
    }
  })
}

const deleteCrypto = function (cryptoid) {
  return $.ajax({
    url: config.apiUrl + '/cryptos/' + cryptoid,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    user: store.user,
    data: { crypto }
  })
}

module.exports = {
  cryptoIndex,
  createCrypto,
  updateCrypto,
  deleteCrypto
}
