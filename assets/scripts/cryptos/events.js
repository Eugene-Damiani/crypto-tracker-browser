'use strict'

const api = require('./api.js')
const store = require('../store')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onIndexCrypto = (event) => {
  event.preventDefault()
  const userCrypto = store.user.token

  api.cryptoIndex(userCrypto)
    .then(ui.getCryptoIndexSuccess)
    .catch(ui.getCryptoIndexFailure)
}

const onCreateCrypto = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.createCrypto(formData)
    .then(ui.createCryptoSuccess)
    .catch(ui.createCryptoFailure)
}

const onCryptoUpdate = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  const cryptoId = $(event.target).closest('section').data('id')

  api.updateCrypto(data, cryptoId)
    .then(ui.updateCryptoSuccess)
    .catch(ui.updateCryptoFailure)
}

const onDeleteCrypto = function (event) {
  event.preventDefault()
  const cryptoId = $(event.target).closest('section').data('id')
  api.deleteCrypto(cryptoId)

    .then(ui.deleteCryptoSuccess)
    .catch(ui.deleteCryptoFailure)
}

module.exports = {
  onIndexCrypto,
  onCreateCrypto,
  onCryptoUpdate,
  onDeleteCrypto
}
