import React from 'react';

/*
User value is going to be what we need to know about the user

login: 'johnlui',
id: 2127912,
avatar_url: 'https://avatars.githubusercontent.com/u/2127912?v=4',
url: 'https://api.github.com/users/johnlui',
html_url: 'https://github.com/johnlui',
followers_url: 'https://api.github.com/users/johnlui/followers',
following_url: 'https://api.github.com/users/johnlui/following{/other_user}',
gists_url: 'https://api.github.com/users/johnlui/gists{/gist_id}',
starred_url: 'https://api.github.com/users/johnlui/starred{/owner}{/repo}',
subscriptions_url: 'https://api.github.com/users/johnlui/subscriptions',
organizations_url: 'https://api.github.com/users/johnlui/orgs',
repos_url: 'https://api.github.com/users/johnlui/repos',
events_url: 'https://api.github.com/users/johnlui/events{/privacy}',
received_events_url: 'https://api.github.com/users/johnlui/received_events',
type: 'User',
site_admin: false,
score: 1,
*/

function UserCard({onClick, user}) {
  return (
    <tr onClick={onClick} className="user-card-container">
      <td>{user.login}</td>
      <td className="avatar-container">
        <img className="avatar" src={user.avatar_url} alt="User Avatar" />
      </td>
    </tr>
  );
}

export default UserCard;
