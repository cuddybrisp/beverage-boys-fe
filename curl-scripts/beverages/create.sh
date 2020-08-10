#!/bin/bash

curl "http://localhost:4741/beverages" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "beverage": {
      "name": "'"${NAME}"'",
      "ounces": "'"${OUNCES}"'"
    }
  }'

echo
