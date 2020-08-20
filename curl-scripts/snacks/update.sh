#!/bin/bash

API="http://localhost:4741"
URL_PATH="/snacks"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
  "beverage": {
    "name": "'"${NAME}"'",
    "servings": "'"${SERVINGS}"'",
    "finished": "'"${FINISHED}"'"
    }
  }'

echo
