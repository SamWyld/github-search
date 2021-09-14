require ('isomorphic-fetch');

const endpoint = 'https://api.github.com';

const authkey = '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';

const makeQuery = (options, init = '?') => {
  return options.reduce ((acc, [key, value]) => {
    if (value === '') return acc;
    if (acc === '?') {
      return acc + `${key}=${value}`;
    } else {
      return acc + `&${key}=${value}`;
    }
  }, init);
};

const search = (where, options) => {
  const query = makeQuery (options);
  console.log (`${endpoint}/search/${where}${query}`);

  return fetch (`${endpoint}/search/${where}${query}`, {
    headers: {Authorization: authkey},
  }).then (res => res.json ());
};

const getUser = name => {
  console.log (`${endpoint}/users/${name}`);
  return fetch (`${endpoint}/users/${name}`, {
    headers: {Authorization: authkey},
  }).then (res => res.json ());
};

const getRepos = (name, options) => {
  const query = makeQuery (options);

  console.log (`${endpoint}/users/${name}/repos${query}`);

  return fetch (`${endpoint}/users/${name}/repos${query}`, {
    headers: {Authorization: authkey},
  }).then (res => res.json ());
};

const test = () => {
  console.log (`${endpoint}/orgs/facebook/repos`);

  return fetch (`${endpoint}/orgs/facebook/repos`, {
    headers: {Authorization: authkey},
  })
    .then (res => res.json ())
    .then (console.log);
};

test ();

module.exports = {
  search,
  getUser,
  getRepos,
};
