import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#Profile"
          onClick={() => handlePageChange('Profile')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
        >
          Profile
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#CreateTrip"
          onClick={() => handlePageChange('CreateTrip')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'CreateTrip' ? 'nav-link active' : 'nav-link'}
        >
          Create a trip
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#WayPoints"
          onClick={() => handlePageChange('WayPoints')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'WayPoints' ? 'nav-link active' : 'nav-link'}
        >
          Map Your Waypoints
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
