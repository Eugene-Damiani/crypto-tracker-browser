'use strict'

let apiUrl
const apiUrls = {
  production: 'https://intense-everglades-73204.herokuapp.com',
  development: 'https://intense-everglades-73204.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
