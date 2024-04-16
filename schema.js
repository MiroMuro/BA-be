const typeDefs = `
  type User {
    username: String!
    favoriteGenre: String!
    id: ID!
    passwordHash: String!
  }
  type Token {
    value: String!
  }
  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String): [Book!]!
    allAuthors: [Author]
    allGenres: [String!]!
    me: User!

  }
  type Author {
    name: String!
    id: ID!
    born: Int
    bookCount: Int
  }
  type Book {
    title: String!
    published: Int!
    author: Author!
    id: ID!
    genres: [String!]!
  }
  type Subscription {
    bookAdded: Book!
    bookDeleted: Book!
  }
  type Mutation {
    addBook(
      title: String!
      author: String!
      published: Int!
      genres: [String!]!
    ): Book

    editAuthor(
      name: String!
      setBornTo: Int!
    ): Author

    createUser(
      username: String!
      favoriteGenre: String!
      password: String!
    ): User

    deleteBook(
      id: ID!
    ): Book

    login(
      username: String!
      password: String!
    ): Token
  }
`;
module.exports = typeDefs;
