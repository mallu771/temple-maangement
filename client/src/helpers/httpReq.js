import {
  API_URL
} from "../config/constants"

export async function httpReq(
  variables = {}
) {
const query = `
  mutation(
    $action:String!,
    $table:String!,
    $fields:JSON
  ){
    execute(
      action:$action,
      table:$table,
      fields:$fields
    )
  }
  `
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