'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCryptoAssets = (event) => {
  event.preventDefault()
  api.cryptoAssets()
    .then(ui.getCryptoSuccess)
    .catch(ui.getCryptoFailure)
}

const onClearAssets = (event) => {
  event.preventDefault()
    .then(ui.clearCryptoSuccess)
    .catch(ui.clearCryptoFailure)
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
  console.log(data)

  api.booksUpdate(data)
    .then(ui.updateCryptoSuccess)
    .catch(ui.updateCryptoFailure)
}

const onDeleteCrypto = function (event) {
  const form = event.target
  const data = getFormFields(form)

  api.deleteCrypto(data.crypto.id)
    .then(ui.deleteCryptoSuccess)
    .catch(ui.deleteCryptoFailure)
}

module.exports = {
  onCryptoAssets,
  onClearAssets,
  onCreateCrypto,
  onCryptoUpdate,
  onDeleteCrypto
}
