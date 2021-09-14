const path = require ('path');
const express = require ('express');
const app = express ();
const search = require ('./search-user').search;

app.use (express.static (path.join (__dirname, '..', 'build')));
app.use (express.static ('public'));

app.get ('/users', (req, res) => {
  const s = req.query.search;
  const p = req.query.page;
  search ('users', [['q', s], ['page', p]]).then (data => {
    res.json (data);
  });
});

app.get ('*', function (req, res) {
  res.redirect ('/');
});

app.listen (5000, () => {
  console.log ('server started on port 5000');
});
