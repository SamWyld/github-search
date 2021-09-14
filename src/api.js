import {getMockUser, getMockRepos, getMockUsers} from './mocks/users';

export const getUsers = (search, page) =>
  fetch (
    `http://localhost:5000/api/users?search=${search}&page=${page}`
  ).then (res => res.json ());

export const getUser = user =>
  fetch (`http://localhost:5000/api/users/${user}`).then (res => res.json ());

export const getUserRepos = (user, q, page) =>
  fetch (
    `http://localhost:5000/api/users/${user}/repos?q=${q}&page=${page}`
  ).then (res => res.json ());

// export const getUsers = getMockUsers;

// export const getUser = getMockUser;

// export const getUserRepos = getMockRepos;
