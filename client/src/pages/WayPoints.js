import React from 'react';
import CityForm from '../components/Form/cityQueryForm'
const FontLink = () => {
  return(
      <div className="card">
          <span className="font-link">
              This is with Font Link. We are linking the fonts from the Google Fonts.
          </span>
      </div>
  )
};

export default function WayPoints() {
  return (
   <>
   <div>
    <h1>Map Your Waypoints</h1>
    < CityForm />
  </div>
  <div class ="searchHistory"></div>
  </>
  );
  
}

