curl "https://intense-everglades-73204.herokuapp.com/sign-in" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "credentials":{
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'"
  }
}'
echo
