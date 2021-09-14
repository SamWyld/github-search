import React from 'react';
import Search from './Search';
import logo from '../assets/github-logo.svg';
import {useHistory} from 'react-router-dom';

const Home = () => {
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

export default Home;
