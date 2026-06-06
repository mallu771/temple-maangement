import {
  API_URL
} from "../config/constants"

export async function httpReq(
  query,
  variables = {}
) {
console.log("QUERY =>", query)
console.log("VARIABLES =>", variables)
console.log("API_URL =>", API_URL)
  const response =
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json"
      },
      body: JSON.stringify({
        query,
        variables
      })
    })

  const result =
    await response.json()

  if (result.errors) {
    throw new Error(
      result.errors[0].message
    )
  }

  return result.data
}