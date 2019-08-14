import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <a><Link to = "/"> Home </Link></a>
        </div>
        <div>
          <a> <Link to="/About">About</Link></a>
        </div>
        <div>
          <a> <Link to="/Contact">Contact</Link></a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
