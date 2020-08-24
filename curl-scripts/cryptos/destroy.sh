#!/bin/bash

curl "http://localhost:4741/cryptos/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \

echo
