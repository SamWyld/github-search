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

/**
 * {
 *  totalCount: int
 *  incompleteResults: bool
 *  items: array(user)
 * }
 */

module.exports = {
  search,
};

// sort	string	query
// Sorts the results of your query by number of followers or repositories, or when the person joined GitHub. Default: best match

// order	string	query
// Determines whether the first search result returned is the highest number of matches (desc) or lowest number of matches (asc). This parameter is ignored unless you provide sort.

// Default: desc
// per_page	integer	query
// Results per page (max 100)

// Default: 30
// page	integer	query
// Page number of the results to fetch.

// Default: 1
