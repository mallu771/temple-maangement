const runQuery =
  require("./crud")

module.exports = {
  Query: {
    execute: (_, args) =>
      runQuery(args)
  },

  Mutation: {
    execute: (_, args) =>
      runQuery(args)
  }
}