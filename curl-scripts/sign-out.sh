
curl "https://intense-everglades-73204.herokuapp.com/sign-out" \
--include \
--request DELETE \
--header "Authorization: Bearer ${TOKEN}" \
--header "Content-Type: application/json"


echo
