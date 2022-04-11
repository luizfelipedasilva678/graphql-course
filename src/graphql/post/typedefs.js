import { gql } from 'apollo-server-core';

export const postTypeDefs = gql`
  extend type Query {
    post: Post
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    #userId: String!
    indexRef: Int!
    createdAt: String!
  }
`;
