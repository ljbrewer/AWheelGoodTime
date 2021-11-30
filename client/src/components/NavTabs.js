import React from 'react';
import { Link } from 'react-router-dom';

// Link to exact paths in app.js
function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
      <Link className="text-light" to="/me">
          Profile
       </Link> 
      </li>
      <li className="nav-item">
      <Link className="text-light" to="/createtrip">
          Create a trip
        </Link>
      </li>
      <li className="nav-item">
      <Link className="text-light" to="/waypoints">
          Map Your Waypoints
        </Link>
      </li>
      <li className="nav-item">
      <Link className="text-light" to="/pointsofInterest">
          Map Your Points of Interest
        </Link>
      </li>
      <li className="nav-item">
      <Link className="text-light" to="/trip/:tripId">
          Single trip details here
       </Link> 
      </li>
    </ul>
  );
}

export default NavTabs;
