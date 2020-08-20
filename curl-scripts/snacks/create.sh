#!/bin/bash

curl "http://localhost:4741/snacks" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "beverage": {
      "name": "'"${NAME}"'",
      "servings": "'"${SERVINGS}"'"
    }
  }'

echo
