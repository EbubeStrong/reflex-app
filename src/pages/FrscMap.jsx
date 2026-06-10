import React from "react";
import NavBar from "../components/NavBar";
import GeoMap from "../components/GeoMap";
// import useGeoLocation from "../hooks/useGeoLocation";
import roadSafetyMarkers from "../roadSafetyMarkers.json";

function FrscMap() {
  // The useGeoLocation hook is not used here to center the map but in the GeoMap component because of the accuracy of the location

  //   const userLocation = useGeoLocation();
  //   userLocation.coordinates.lat, userLocation.coordinates.lng
  const location = [6.4483, 7.5139];
  const zoom = 15;
  return (
    <div className="bg-mobile-bg md:bg-desktop-bg">
      <nav>
        <NavBar />
      </nav>

      <div>
        <GeoMap
          location={location}
          zoom={zoom}
          roadSafetyMarkers={roadSafetyMarkers}
        />
      </div>
    </div>
  );
}

export default FrscMap;
