#!/bin/bash

curl "http://localhost:4741/cryptos/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
      "crypto": {
          "asset": "'"${ASSET}"'",
          "amount": "'"${AMOUNT}"'",
          "exchange": "'"${EXCHANGE}"'"
      }
  }'

echo
