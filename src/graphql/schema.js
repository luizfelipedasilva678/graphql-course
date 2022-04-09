import { gql } from 'apollo-server-core';

export const rootTypeDefs = gql`
  type Query {
    hi: String
  }
`;

const rootResolvers = {
  Query: {
    hi: () => 'Hi again',
  },
};

export const typeDefs = [rootTypeDefs];
export const resolvers = [rootResolvers];
