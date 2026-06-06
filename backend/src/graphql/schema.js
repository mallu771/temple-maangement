const typeDefs = `#graphql

scalar JSON

type Query {
  execute(
    action: String!
    table: String!
    fields: JSON
    filter: JSON
  ): JSON
}

type Mutation {
  execute(
    action: String!
    table: String!
    fields: JSON
    filter: JSON
  ): JSON
}
`

module.exports = typeDefs