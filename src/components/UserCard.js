import React from 'react';
import {Link} from 'react-router-dom';

function UserCard({user}) {
  return (
    <tr className="user-card-container">
      <td>
        <Link to={`/user/${user.login}`}>
          {user.login}
        </Link>
      </td>
      <td className="avatar-container">
        <img className="avatar" src={user.avatar_url} alt="User Avatar" />
      </td>
    </tr>
  );
}

export default UserCard;
