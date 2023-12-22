import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        image
      </Link>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Movies">Movies</Link>
        </li>
        <li>
          <Link to="/TVShows">Tv Shows</Link>
        </li>
        <li>
          <Link to="/Anime">Anime</Link>
        </li>
        <li>
          <Link to="/News">News</Link>
        </li>
        <li>
          <Link to="/Search">Search</Link>
        </li>
        <li>
          <Link to="/profile" className="profile">
            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
