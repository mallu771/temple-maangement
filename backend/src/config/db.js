/* require("dotenv").config()

const { Pool } = require("pg")
console.log(process.env.DB_PASSWORD)
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

module.exports = pool */
const { Pool } = require("pg")

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "8055", // must be string
  database: "postgres"
})

module.exports = pool