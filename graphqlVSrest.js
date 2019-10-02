// https://blog.apollographql.com/graphql-vs-rest-5d425123e34b

GET /books/1
{
  "title": "Black Hole Blues",
  "author": { 
    "firstName": "Janna",
    "lastName": "Levin"
  }
  // ... more fields here
}

type Book {
  id: ID
  title: String
  published: Date
  price: String
  author: Author
}
type Author {
  id: ID
  firstName: String
  lastName: String
  books: [Book]
}

type Query {
  book(id: ID!): Book
  author(id: ID!): Author
}

GET /graphql?query={ book(id: "1") { title, author { firstName } } }
{
  "title": "Black Hole Blues",
  "author": {
    "firstName": "Janna",
  }
}
