import React from 'react';
import Search from './Search';
import logo from './github-logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import UserList from './user/UserList';

const HomePage = () => {
  let history = useHistory ();
  const [searchValue, setSearchValue] = React.useState ('');

  const handleChange = newValue => {
    setSearchValue (newValue);
  };

  const handleSubmit = event => {
    event.preventDefault ();
    history.push (`/search/${searchValue}/1`);
  };

  return (
    <div className="home-page">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Github logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="home-page-search">
          <Search onChange={handleChange} value={searchValue} />
        </div>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route path="/search/:user/:page" component={UserList} />
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
