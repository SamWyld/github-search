import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';
import User from './components/User';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route path="/search/:user/:page" component={UserList} />
          <Route path="/user/:user" component={User} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
