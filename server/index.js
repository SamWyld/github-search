const path = require ('path');
const express = require ('express');
const app = express ();
const {search, getUser, getRepos} = require ('./app');

app.use (express.static (path.join (__dirname, '..', 'build')));
app.use (express.static ('public'));

app.get ('/api/users', (req, res) => {
  const {search: s, page} = req.query;
  search ('users', [['q', s], ['page', page]]).then (data => {
    res.json (data);
  });
});

app.get ('/api/users/:user', (req, res) => {
  const user = req.params.user;
  getUser (user).then (data => {
    res.json (data);
  });
});

app.get ('/api/users/:user/repos', (req, res) => {
  const user = req.params.user;
  getRepos (user).then (data => {
    res.json (data);
  });
});

app.get ('*', function (req, res) {
  res.sendFile ('index.html', {
    root: path.join (__dirname, '..', 'build'),
  });
});

app.listen (5000, () => {
  console.log ('server started on port 5000');
});
