const axios = require('axios');
const {
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean
} = require('graphql');

// Data
const books = require('./data/books.json');
const authors = require('./data/authors.json');

// BookType
const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'This represents a book written by an author',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) }, // resolve pulled from above obj
    name: { type: GraphQLNonNull(GraphQLString) },
    authorId: { type: GraphQLNonNull(GraphQLInt) },
    author: {
      type: AuthorType,
      resolve: book => {
        return authors.find(author => author.id === book.authorId);
      }
    },
    madeInKenya: { type: GraphQLNonNull(GraphQLBoolean) },
    publishedAt: { type: GraphQLNonNull(GraphQLString) },
    publisher: { type: GraphQLNonNull(GraphQLString) },
    isbn: { type: GraphQLNonNull(GraphQLString) },
    format: { type: GraphQLNonNull(GraphQLString) },
    coverUrl: { type: GraphQLNonNull(GraphQLString) },
    pages: { type: GraphQLNonNull(GraphQLInt) },
    bookDesc: { type: GraphQLNonNull(GraphQLString) }
  })
});

// AuthorType
const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represents an author of a book',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) }, // resolve pulled from above obj
    name: { type: GraphQLNonNull(GraphQLString) },
    books: {
      type: new GraphQLList(BookType),
      resolve: author => {
        return books.filter(book => book.authorId === author.id);
      }
    },
    authorDesc: { type: GraphQLNonNull(GraphQLString) }
  })
});

// RootQueryType
const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    book: {
      type: BookType,
      description: 'A Single Book',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent, args) => books.find(book => book.id === args.id)
    },
    books: {
      type: new GraphQLList(BookType),
      description: 'List of All Books',
      resolve: () => books
      // Use axios to fectch api endpoint
      // resolve: (parent, args) => {
      //   return axios.get('https://api.foo.com/books').then(res => res.data);
      // }
    },
    author: {
      type: AuthorType,
      description: 'A Single Author',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent, args) => authors.find(author => author.id === args.id)
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: 'List of All Authors',
      resolve: () => authors
    }
  })
});

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addBook: {
      type: BookType,
      description: 'Add a book',
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        authorId: { type: GraphQLNonNull(GraphQLInt) },
        madeInKenya: { type: GraphQLNonNull(GraphQLBoolean) },
        publishedAt: { type: GraphQLNonNull(GraphQLString) },
        publisher: { type: GraphQLNonNull(GraphQLString) },
        isbn: { type: GraphQLNonNull(GraphQLString) },
        format: { type: GraphQLNonNull(GraphQLString) },
        coverUrl: { type: GraphQLNonNull(GraphQLString) },
        pages: { type: GraphQLNonNull(GraphQLInt) },
        bookDesc: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        const book = {
          id: books.length + 1,
          name: args.name,
          authorId: args.authorId,
          madeInKenya: args.madeInKenya,
          publishedAt: args.publishedAt,
          publisher: args.publisher,
          isbn: args.isbn,
          format: args.format,
          coverUrl: args.coverUrl,
          pages: args.pages,
          bookDesc: args.bookDesc
        };
        books.push(book);
        return book;
      }
    },
    addAuthor: {
      type: AuthorType,
      description: 'Add an Author',
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        authorDesc: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        const author = {
          id: authors.length + 1,
          name: args.name,
          authorDesc: args.authorDesc
        };
        authors.push(author);
        return author;
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
});
