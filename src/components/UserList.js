import React from 'react';
import {useHistory} from 'react-router-dom';

import Input from './Input';
import UserCard from './UserCard';
import Pagination from './Pagination';

import {getUsers} from '../api';

function UserList({match}) {
  const [users, setUsers] = React.useState ([]);
  const [searchValue, setSearchValue] = React.useState (match.params.user);

  const page = parseInt (match.params.page);

  let history = useHistory ();

  React.useEffect (
    () => {
      getUsers (searchValue, page).then (data => setUsers (data.items));
    },
    [page, match.params.user]
  );

  const handleChange = newValue => {
    setSearchValue (newValue);
  };

  const handleSubmit = event => {
    event.preventDefault ();
    history.push (`/search/${searchValue}/1`);
  };

  const handlePrevious = () => {
    // It should not be possible to go to a page less than 1
    const newPage = page - 1;
    if (newPage < 1) {
      return;
    } else {
      history.push (`/search/${match.params.user}/${newPage}`);
    }
  };

  const handleNext = () => {
    const newPage = page + 1;
    history.push (`/search/${match.params.user}/${newPage}`);
  };

  return (
    <div className="user-list-container">
      <div className="user-list-content">
        <form className="user-list-search" onSubmit={handleSubmit}>
          <Input onChange={handleChange} value={searchValue} />
        </form>
        <div className="user-table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Avatar</th>
              </tr>
            </thead>
            <tbody>
              {users.map (user => {
                return <UserCard key={user.id} user={user} />;
              })}
            </tbody>
          </table>
        </div>
        <Pagination page={page} previous={handlePrevious} next={handleNext} />
      </div>
    </div>
  );
}

export default UserList;
