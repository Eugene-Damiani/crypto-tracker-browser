curl 'http://localhost:4741/cryptos' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "crypto": {
      "asset": "'"${ASSET}"'",
      "amount": "'"${AMOUNT}"'",
      "exchange": "'"${EXCHANGE}"'"
    }
  }'
echo
