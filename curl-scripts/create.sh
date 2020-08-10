curl 'https://intense-everglades-73204.herokuapp.com/asset' \
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
