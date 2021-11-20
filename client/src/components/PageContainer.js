import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Profile from '../pages/Profile';
import CreateTrip from '../pages/CreateTrip';


export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState('Profile');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Profile') {
      return <Profile />;
    }
    if (currentPage === 'CreateTrip') {
      return <CreateTrip />;
    }
    return <Profile />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
