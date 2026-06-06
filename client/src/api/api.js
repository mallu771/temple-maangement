import { httpReq }
from "../helpers/httpReq"

export async function insertRegister(payload) {

  const result = await httpReq(
    {
      action: "insert",
      table: "register",
      fields: {
        name: payload.updatedUsers.newUser.name,
        email: payload.updatedUsers.newUser.email,
        password: payload.updatedUsers.newUser.password  
      }
    }
  )
  return result
}

export async function selectRegister() {
  const data = await httpReq( {
    action: "select",
    table: "register",
    fields: [
      "id",
      "name",
      "email",
      "password"
    ]
  })

  return data.execute
}