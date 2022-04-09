import { gql } from 'apollo-server-core';
import { userResolvers } from './user/resolvers';
import { userTypeDefs } from './user/typedefs';

export const rootTypeDefs = gql`
  type Query {
    _root: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _root: () => true,
  },
};

export const typeDefs = [rootTypeDefs, userTypeDefs];
export const resolvers = [rootResolvers, userResolvers];
