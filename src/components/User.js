import React from 'react';
import {useHistory} from 'react-router-dom';

import Input from './Input';
import Pagination from './Pagination';

import {getUser, getUserRepos} from '../api';

function User({match}) {
  const [user, setUser] = React.useState (null);
  const [repos, setRepos] = React.useState ([]);
  const [page, setPage] = React.useState (1);
  const [searchValue, setSearchValue] = React.useState ('');
  const [repoFilter, setRepoFilter] = React.useState ('');

  let history = useHistory ();

  React.useEffect (
    () => {
      getUser (match.params.user).then (data => setUser (data));
    },
    [match.params.user]
  );

  React.useEffect (
    () => {
      getUserRepos (match.params.user, repoFilter, page).then (data =>
        setRepos (data)
      );
    },
    [match.params.user]
  );

  const repoSearchChange = newValue => {
    setRepoFilter (newValue);
    getUserRepos (match.params.user, newValue, page).then (data => {
      console.log ('repos');
      console.log (data);
      setRepos (data);
    });
  };

  const userSearchChange = newValue => {
    setSearchValue (newValue);
  };

  const handleSubmit = event => {
    event.preventDefault ();
    history.push (`/search/${searchValue}/1`);
  };

  return (
    <div className="user">
      <div className="user-container">
        {!user
          ? <div> Loading... </div>
          : <div className="user-info">
              <form className="search-user-form" onSubmit={handleSubmit}>
                <Input
                  onChange={userSearchChange}
                  value={searchValue}
                  placeholder={'Search for another github user...'}
                />
              </form>
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
          <div className="repo-filter">
            <Input
              onChange={repoSearchChange}
              value={repoFilter}
              placeholder="Filter repositories..."
            />
          </div>
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
          <Pagination page={1} />
        </div>
      </div>
    </div>
  );
}

export default User;
