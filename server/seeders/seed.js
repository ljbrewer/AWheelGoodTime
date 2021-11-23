const db = require('../config/connection');
const { Profile, Trip, Waypoint, Landmark} = require('../models');
const profileSeeds = require('./profileSeeds.json');
const tripSeeds = require('./tripSeeds.json');
const landmarkSeeds = require('./landmarkSeeds.json');
const waypointSeeds = require('./waypointSeeds.json');

db.once('open', async () => {
  try {
      // clean database
    await Profile.deleteMany({});
    await Trip.deleteMany({});
    await Landmark.deleteMany({});
    await Waypoint.deleteMany({});

    // bulk create each model
   const Profiles = await Profile.insertMany(profileSeeds);    
   const Trips = await Trip.insertMany(tripSeeds);
   const Waypoints = await Waypoint.insertMany(waypointSeeds);    
   const Landmarks = await Landmark.insertMany(landmarkSeeds);

    for (newTrip of Trips) {
      // randomly add each trips to each Waypoint
      const tempWaypoint = Waypoints[Math.floor(Math.random() * Waypoints.length)];
      tempWaypoint.Trip.push(newTrip._id);
      await tempWaypoint.save();;
    }
    for(newProfile of Profiles){
      // randomly add a profile to each trip
      const tempTrip = Trips[Math.floor(Math.random() * Trips.length)];
      tempTrip.owner.push(newProfile._id);
      await tempTrip.save();
    }
    for (newTrip of Trips) {
        // randomly add each trips to each Waypoint
        const tempLandmark = Landmarks[Math.floor(Math.random() * Landmarks.length)];
        tempLandmark.Trip.push(newTrip._id);
        await tempLandmark.save();
    }

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
