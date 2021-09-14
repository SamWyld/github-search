require ('isomorphic-fetch');

const endpoint = 'https://api.github.com';

const search = (where, options) => {
  const query = options.reduce ((acc, [key, value]) => {
    if (acc === '?') {
      return acc + `${key}=${value}`;
    } else {
      return acc + `&${key}=${value}`;
    }
  }, '?');

  console.log (`${endpoint}/search/${where}${query}`);

  return fetch (`${endpoint}/search/${where}${query}`, {
    headers: {Authorization: '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'},
  }).then (res => res.json ());
};

const getUser = name => {
  console.log (`${endpoint}/users/${name}`);
  return fetch (`${endpoint}/users/${name}`, {
    headers: {Authorization: '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'},
  }).then (res => res.json ());
};

const getRepos = name => {
  console.log (`${endpoint}/users/${name}/repos?per_page=5`);
  return fetch (`${endpoint}/users/${name}/repos?per_page=5`, {
    headers: {Authorization: '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'},
  }).then (res => res.json ());
};

module.exports = {
  search,
  getUser,
  getRepos,
};
