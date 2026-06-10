import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { Icon } from "leaflet";
import L from "leaflet";
import useGeoLocation from "../hooks/useGeoLocation";
// import GeoCoder from "./GeoCoder";
import Routing from "./Routing";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

function GeoMap(props) {
  const widthSize = window.innerWidth;
  let defaultIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/727/727606.png",
    iconSize: [40, 40],
    popupAnchor: [2, -15],
  });
  L.Marker.prototype.options.icon = defaultIcon;

  const userIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/3710/3710297.png",
    iconSize: [40, 40],
  });

  const ambulanceIcon = new Icon({
    iconUrl: "https://img.icons8.com/?size=48&id=rBh1fuOC6Bjx&format=png",
    iconSize: [40, 40],
  });

  const policeIcon = new Icon({
    iconUrl: "https://img.icons8.com/?size=80&id=KC6AUAgtRrEN&format=png",
    iconSize: [40, 40],
  });

  const roadSafetyIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/10275/10275975.png",
    iconSize: [40, 40],
  });

  const fireServiceIcon = new Icon({
    iconUrl: "https://img.icons8.com/?size=48&id=15149&format=png",
    iconSize: [40, 40],
  });

  //   const position = [6.4852, 7.5193];

  const location = useGeoLocation();
  const { activeMap, setActiveMap } = useAuth();
  const handleLinkClick = (link) => {
    setActiveMap(link);
  };

  return (
    <div className="relative">
      <div className="relative top-0 left-0 w-full">
        <ul className="flex justify-center my-2 mx-2 space-x-1">
          <li>
            <button
              className={`${
                activeMap === "All"
                  ? "py-[5px] px-[15px] text-[12px] md:text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#971b22] text-white"
                  : "py-[5px] px-[15px] text-[12px] md:text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#FFB2B2] text-white"
              }`}
              onClick={() => handleLinkClick("All")}
            >
              <Link to="/tracking">All</Link>
            </button>
          </li>
          <li>
            <button
              className={`${
                activeMap === "Ambulance"
                  ? "py-[5px] px-[15px] text-[12px] md:text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#971b22] text-white"
                  : "py-[5px] px-[15px] text-[12px] md:text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#FFB2B2] text-white"
              }`}
              onClick={() => handleLinkClick("Ambulance")}
            >
              <Link to="/hospitals">Ambulance</Link>
            </button>
          </li>
          <li>
            <button
              className={`${
                activeMap === "Police"
                  ? "py-[5px] px-[15px] text-[12px] md:text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#971b22] text-white"
                  : "py-[5px] px-[15px] text-[12px] md:text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#FFB2B2] text-white"
              }`}
              onClick={() => handleLinkClick("Police")}
            >
              <Link to="/policestations">Police</Link>
            </button>
          </li>
          <li>
            <button
              className={`${
                activeMap === "Fire Service"
                  ? "py-[5px] px-[15px] text-[10px] md:text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#971b22] text-white"
                  : "py-[5px] px-[15px] text-[10px] md:text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#FFB2B2] text-white"
              }`}
              onClick={() => handleLinkClick("Fire Service")}
            >
              <Link to="/firestations">Fire Service</Link>
            </button>
          </li>
          <li>
            <button
              className={`${
                activeMap === "Road Safety"
                  ? "py-[5px] px-[15px] text-[10px] md:text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#971b22] text-white"
                  : "py-[5px] px-[15px] text-[10px] md:text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#FFB2B2] text-white"
              }`}
              onClick={() => handleLinkClick("Road Safety")}
            >
              <Link to="/frsc">Road Safety</Link>
            </button>
          </li>
        </ul>
      </div>
      <div className="relative">
        <MapContainer center={props.location} zoom={props.zoom}>
          <TileLayer
            attribution=""
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg" /> */}

          {/* Ambulance Services */}
          {props.ambulanceMarkers &&
            props.ambulanceMarkers.map((marker) => (
              <Marker position={marker.geocode} icon={ambulanceIcon}>
                <Popup>
                  <div className="flex flex-col ">
                    <p className="font-bold">{marker.popUp}</p>
                    <Link to={widthSize >= 768 ? "#" : "tel:+234067157635"}>
                      Contact: +234067157635
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))}

          {/* Police Services */}
          {props.policeMarkers &&
            props.policeMarkers.map((marker) => (
              <Marker position={marker.geocode} icon={policeIcon}>
                <Popup>
                  <div className="flex flex-col ">
                    <p className="font-bold">{marker.popUp}</p>
                    <Link to={widthSize >= 768 ? "#" : "tel:+2347065409291"}>
                      Contact: +2347065409291
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))}

          {/* Road Safety */}
          {props.roadSafetyMarkers &&
            props.roadSafetyMarkers.map((marker) => (
              <Marker position={marker.geocode} icon={roadSafetyIcon}>
                <Popup>
                  <div className="flex flex-col ">
                    <p className="font-bold">{marker.popUp}</p>
                    <Link to={widthSize >= 768 ? "#" : "tel:+122"}>
                      Contact: 122
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))}

          {/* Fire Service */}
          {props.fireServiceMarkers &&
            props.fireServiceMarkers.map((marker) => (
              <Marker position={marker.geocode} icon={fireServiceIcon}>
                <Popup>
                  <div className="flex flex-col ">
                    <p className="font-bold">{marker.popUp}</p>
                    <Link to={widthSize >= 768 ? "#" : "tel:+2347065409291"}>
                      Contact: +2347065409291
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))}

          {/* User location */}
          {location.loaded && !location.error && (
            <Marker
              position={[location.coordinates.lat, location.coordinates.lng]}
              icon={userIcon}
            >
              <Popup>
                <p className="font-bold">Current location</p>
              </Popup>
            </Marker>
          )}

          {/* <GeoCoder /> */}
          <Routing />
        </MapContainer>
      </div>
    </div>
  );
}

export default GeoMap;
