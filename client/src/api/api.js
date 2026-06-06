import { httpReq }
from "../helpers/httpReq"

export async function insertRegister(
  payload
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
  console.log(payload.updatedUsers.newUser.name)

  return await httpReq(
    query,
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
}
