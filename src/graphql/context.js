import fetch from 'node-fetch';
import { getUsers } from './user/utils';
import { makeUserDataLoader } from './user/dataloaders';

export const context = () => {
  return {
    userDataLoader: makeUserDataLoader(getUsers(fetch)),
    getUsers: getUsers(fetch),
    getPosts: (path = '/') => fetch(`${process.env.API_URL}/posts` + path),
  };
};
