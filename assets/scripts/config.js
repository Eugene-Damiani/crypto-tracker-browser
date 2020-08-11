'use strict'

let apiUrl
const apiUrls = {
  production: 'hhttps://intense-everglades-73204.herokuapp.com/sign-in',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
