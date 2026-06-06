const db = require("../config/db")
const allowedTables =
  require("../utils/allowedTables")

async function runQuery({
  action,
  table,
  fields,
  filter
}) {

  if (!allowedTables.includes(table)) {
    throw new Error("Invalid Table")
  }

  switch (action) {

    case "select": {

      const columns =fields.join(",")

      let sql =
        `SELECT ${columns}
         FROM ${table}`

      let values = []

      if (
        filter &&
        Object.keys(filter).length
      ) {

        const where =
          Object.keys(filter).map( (key, index) => `${key}=$${index + 1}` ).join(" AND ")

        sql += ` WHERE ${where}`

        values =
          Object.values(filter)
      }

      const result =
        await db.query(
          sql,
          values
        )

      return result.rows
    }

   case "insert": {

  console.log("FIELDS =>", fields)

  const keys = Object.keys(fields)

  console.log("KEYS =>", keys)

  const values = Object.values(fields)

  console.log("VALUES =>", values)

  const placeholders = keys
    .map((_, i) => `$${i + 1}`)
    .join(",")

  const sql = `
    INSERT INTO ${table}
    (${keys.join(",")})
    VALUES (${placeholders})
    RETURNING *
  `

  console.log("SQL =>", sql)

  const result = await db.query(sql, values)

  return result.rows[0]
}
    case "update": {

      const setPart =
        Object.keys(fields)
          .map(
            (key, index) =>
              `${key}=$${index + 1}`
          )
          .join(",")

      const filterKey =
        Object.keys(filter)[0]

      const sql = `
      UPDATE ${table}
      SET ${setPart}
      WHERE ${filterKey}
      =${
        Object.keys(fields)
          .length + 1
      }
      RETURNING *
      `

      const result =
        await db.query(
          sql,
          [
            ...Object.values(fields),
            filter[filterKey]
          ]
        )

      return result.rows[0]
    }

    case "delete": {

      const filterKey =
        Object.keys(filter)[0]

      const sql = `
      DELETE FROM ${table}
      WHERE ${filterKey}=$1
      RETURNING *
      `

      const result =
        await db.query(
          sql,
          [filter[filterKey]]
        )

      return result.rows[0]
    }

    default:
      throw new Error(
        "Invalid Action"
      )
  }
}

module.exports = runQuery