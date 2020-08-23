#!/bin/sh
curl "http://localhost:4741/cryptos" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
