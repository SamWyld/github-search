import React from 'react';
import Search from './Search';
import UserCard from './UserCard';
import {getMockUsers} from '../mocks/users';
import {useHistory} from 'react-router-dom';

const Pagination = ({page, previous, next}) => {
  return (
    <div className="pagination">
      <button
        className="pagination-button"
        disabled={page === 1}
        onClick={previous}
      >
        Previous
      </button>
      <button className="pagination-button" onClick={next}>Next</button>
    </div>
  );
};

function UserList({match}) {
  const [users, setUsers] = React.useState ([]);
  const [searchValue, setSearchValue] = React.useState (match.params.user);

  const page = parseInt (match.params.page);

  let history = useHistory ();

  React.useEffect (
    () => {
      fetch (
        `http://localhost:5000/api/users?search=${searchValue}&page=${match.params.page}`
      )
        .then (res => res.json ())
        .then (data => setUsers (data.items));
    },
    [page]
  );

  // React.useEffect (() => {
  //   getMockUsers ().then (data => {
  //     console.log (data);
  //     setUsers (data.items);
  //   });
  // }, []);

  const handleChange = newValue => {
    setSearchValue (newValue);
  };

  const handleSubmit = event => {
    event.preventDefault ();
    history.push (`/search/${searchValue}`);
  };

  const handleClick = () => {};

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
          <Search onChange={handleChange} value={searchValue} />
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
                return (
                  <UserCard key={user.id} onClick={handleClick} user={user} />
                );
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
