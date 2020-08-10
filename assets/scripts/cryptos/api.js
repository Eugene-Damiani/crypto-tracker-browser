'use strict'

const config = require('../config')
const store = require('../store')

const getCryptoAssets = function () {
  return $.ajax({
    url: config.apiUrl + '/cryptos',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createCrypto = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/cryptos/' + formData.crypto,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      crypto: {
        asset: formData.crypto.asset,
        amount: formData.crypto.amount,
        exchange: formData.cypto.exchange
      }
    }
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

const deleteCrypto = function (id) {
  return $.ajax({
    url: config.apiUrl + '/cryptos/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getCryptoAssets,
  createCrypto,
  updateCrypto,
  deleteCrypto
}
