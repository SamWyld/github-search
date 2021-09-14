import React from 'react';
import {getMockUser, getMockRepos} from '../mocks/users';

function User({match}) {
  const [user, setUser] = React.useState (null);
  const [repos, setRepos] = React.useState ([]);

  // React.useEffect (
  //   () => {
  //     getMockUser ().then (data => setUser (data));
  //   },
  //   [match.params.user]
  // );

  // React.useEffect (
  //   () => {
  //     getMockRepos ().then (data => setRepos (data));
  //   },
  //   [match.params.user]
  // );

  React.useEffect (
    () => {
      fetch (`http://localhost:5000/api/users/${match.params.user}`)
        .then (res => res.json ())
        .then (data => setUser (data));
    },
    [match.params.user]
  );

  React.useEffect (
    () => {
      fetch (`http://localhost:5000/api/users/${match.params.user}/repos`)
        .then (res => res.json ())
        .then (data => setRepos (data));
    },
    [match.params.user]
  );

  return (
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
  );
}

export default User;
