import { gql } from 'apollo-server-core';

export const postTypeDefs = gql`
  extend type Query {
    post(id: ID!): PostResult!
    posts(input: ApiFiltersInput): [Post!]!
  }

  union PostResult = Post | PostTimeoutError | PostNotFoundError

  interface PostError {
    statusCode: Int!
    message: String!
  }

  type PostTimeoutError implements PostError {
    statusCode: Int!
    message: String!
    timeout: Int!
  }

  type PostNotFoundError implements PostError {
    statusCode: Int!
    message: String!
    postId: String!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    #userId: String!
    indexRef: Int!
    createdAt: String!
    unixTimeStamp: String!
  }
`;
