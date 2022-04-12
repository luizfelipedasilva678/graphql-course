import { gql } from 'apollo-server-core';

export const postTypeDefs = gql`
  extend type Query {
    post(id: ID!): Post!
    posts(input: ApiFiltersInput): [Post!]!
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
