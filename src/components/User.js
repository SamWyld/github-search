import React from 'react';
import {useHistory} from 'react-router-dom';

import {getUser, getUserRepos} from '../api';
import Search from './Search';

function User({match}) {
  const [user, setUser] = React.useState (null);
  const [repos, setRepos] = React.useState ([]);
  const [searchValue, setSearchValue] = React.useState ('');

  let history = useHistory ();

  const handleChange = newValue => {
    setSearchValue (newValue);
  };

  const handleSubmit = event => {
    event.preventDefault ();
    history.push (`/search/${searchValue}/1`);
  };

  React.useEffect (
    () => {
      getUser (match.params.user).then (data => setUser (data));
    },
    [match.params.user]
  );

  React.useEffect (
    () => {
      getUserRepos (match.params.user).then (data => setRepos (data));
    },
    [match.params.user]
  );

  return (
    <div className="user">
      <form className="search-user-form" onSubmit={handleSubmit}>
        <Search
          onChange={handleChange}
          value={searchValue}
          placeholder={'Search for another github user...'}
        />
      </form>
      <div className="user-container">
        {!user
          ? <div> Loading... </div>
          : <div className="user-info">
              <div className="user-picture-container">
                <img className="user-picture" src={user.avatar_url} />
              </div>
              <h3 className="user-name">{match.params.user}</h3>
              <div className="user-info-item">{user.name}</div>
              <div className="user-info-item">{user.location}</div>
              <div className="user-info-item">{user.followers} followers</div>
              <div className="user-info-item">{user.following} following</div>
            </div>}
        <div className="repos-list">
          {repos.map (repo => {
            return (
              <div className="repo-container" key={repo.id}>
                <div>
                  {repo.name}
                </div>
                <div>
                  {repo.full_name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default User;
