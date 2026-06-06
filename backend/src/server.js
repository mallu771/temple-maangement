const express =
  require("express")

const cors =
  require("cors")

const {
  ApolloServer
} = require("@apollo/server")

const {
  expressMiddleware
} = require(
  "@as-integrations/express5"
)

const typeDefs =
  require("./graphql/schema")

const resolvers =
  require("./graphql/resolvers")

async function start() {

  const app = express()

  app.use(cors())

  app.use(express.json())

  const server =
    new ApolloServer({
      typeDefs,
      resolvers
    })

  await server.start()

  app.use(
    "/graphql",
    expressMiddleware(server)
  )

  app.listen(4000, () => {
    console.log(
      "Server Running on 4000"
    )
  })
}

start()