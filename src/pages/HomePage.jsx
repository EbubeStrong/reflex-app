import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/Search";
import HomepageHotlines from "../components/homepageHotlines";
import MainMenu from "../components/MainMenu";
import map from "../images/mapImage/map.png";
import allMap from "../images/mapImage/all-map.png";
import ambulanceMap from "../images/mapImage/hospital-map.png";
import policeMap from "../images/mapImage/police-map.png";
import fireServiceMap from "../images/mapImage/fire-map.png";
import roadSafetyMap from "../images/mapImage/frsc-map.png";
import mobileMap from "../images/mapImage/mobile-map.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import useGeoLocation from "../hooks/useGeoLocation";
import getAddressFromCoordinates from "../getAddressFromCoordinates";
import { FaLocationCrosshairs, FaTreeCity } from "react-icons/fa6";

function HomePage() {
  const location = useGeoLocation();
  const [address, setAddress] = useState(null);
  const [search, setSearch] = useState("");
  const [activeMap, setActiveMap] = useState("All");
  const handleLinkClick = (link) => {
    setActiveMap(link);
  };

  useEffect(() => {
    if (location.loaded && !location.error) {
      getAddressFromCoordinates(
        location.coordinates.lat,
        location.coordinates.lng
      )
        .then((address) => setAddress(address))
        .catch((error) => console.error("Error getting address:", error));
    } else if (location.error) {
      console.error("Error getting user's location:", location.error.message);
      alert("You must grant access to your location to use our service");
    }
  }, [location]);

  return (
    <div className="flex flex-col justify-between relative h-full">
      <div className="flex flex-col justify-between relative h-[100vh] bg-mobile-bg md:bg-desktop-bg bg-cover bg-center">
        <nav>
          <NavBar />
        </nav>

        <div className="flex flex-col justify-center">
          <div className="md:hidden my-2 px-2">
            <SearchBar />
          </div>

          <div className="md:hidden my-5 px-2">
            <HomepageHotlines />
          </div>

          <div className=" hidden md:block mt-12 ">
            <div className="flex justify-evenly gap-6">
              <div className="w-[43%]">
                <div>
                  <p className="font-semibold my-3 md:text-5xl">
                    Find emergency
                  </p>
                  <p className="font-semibold md:text-5xl">services close-by</p>
                </div>

                <div className="mt-4 text-xl">
                  <p>
                    Enter your current location and discover the closest service
                    providers by selecting map options.
                  </p>
                </div>

                <div className="mt-4 lg:basis-1/4">
                  <div className="flex justify-center items-center">
                    <input
                      className="bg-gray-100 rounded-full py-2 px-4 w-full border-[1px] border-blue-300 outline-none focus:ring focus:ring-blue-300"
                      type="text"
                      placeholder="Search..."
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="text-[#B33625] text-md font-medium my-6">
                  <p className="flex items-center gap-3 mb-2">
                    <FaLocationCrosshairs />
                    {`Your current GPS coordinates: ${parseFloat(
                      location.coordinates.lat
                    ).toFixed(4)}, ${parseFloat(
                      location.coordinates.lng
                    ).toFixed(4)}`}
                  </p>

                  <p className="flex items-center gap-3 mb-2">
                    <FaTreeCity />
                    {address ? (
                      <div>{`You're current in ${address.state}, ${address.country}`}</div>
                    ) : (
                      <div>Loading Location...</div>
                    )}
                  </p>
                </div>
              </div>

              <div className="md:w-[40%]">
                {search === "" ? (
                  <div>
                    <ul className="flex justify-center my-2 space-x-1">
                      <li>
                        <button
                          className={`${
                            activeMap === "All" && search !== ""
                              ? "py-[5px] px-[15px] text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#971b22] text-white"
                              : "py-[5px] px-[15px] text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#FFB2B2] text-white"
                          }`}
                          onClick={() => handleLinkClick("All")}
                          disabled
                        >
                          All
                        </button>
                      </li>
                      <li>
                        <button
                          className={`${
                            activeMap === "Ambulance"
                              ? "py-[5px] px-[15px] text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#971b22] text-white"
                              : "py-[5px] px-[15px] text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#FFB2B2] text-white"
                          }`}
                          onClick={() => handleLinkClick("Ambulance")}
                          disabled
                        >
                          Ambulance
                        </button>
                      </li>
                      <li>
                        <button
                          className={`${
                            activeMap === "Police"
                              ? "py-[5px] px-[15px] text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#971b22] text-white"
                              : "py-[5px] px-[15px] text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#FFB2B2] text-white"
                          }`}
                          onClick={() => handleLinkClick("Police")}
                          disabled
                        >
                          Police
                        </button>
                      </li>
                      <li>
                        <button
                          className={`${
                            activeMap === "Fire Service"
                              ? "py-[5px] px-[15px] text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#971b22] text-white"
                              : "py-[5px] px-[15px] text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#FFB2B2] text-white"
                          }`}
                          onClick={() => handleLinkClick("Fire Service")}
                          disabled
                        >
                          Fire Service
                        </button>
                      </li>
                      <li>
                        <button
                          className={`${
                            activeMap === "Road Safety"
                              ? "py-[5px] px-[15px] text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#971b22] text-white"
                              : "py-[5px] px-[15px] text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#FFB2B2] text-white"
                          }`}
                          onClick={() => handleLinkClick("Road Safety")}
                          disabled
                        >
                          Road Safety
                        </button>
                      </li>
                    </ul>

                    <Link to="#">
                      <img src={map} alt="MAP" />
                    </Link>
                  </div>
                ) : (
                  <div>
                    <ul className="flex justify-center my-2 space-x-1">
                      <li>
                        <button
                          className={`${
                            activeMap === "All"
                              ? "py-[5px] px-[15px] text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#971b22] text-white"
                              : "py-[5px] px-[15px] text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#FFB2B2] text-white"
                          }`}
                          onClick={() => handleLinkClick("All")}
                        >
                          All
                        </button>
                      </li>
                      <li>
                        <button
                          className={`${
                            activeMap === "Ambulance"
                              ? "py-[5px] px-[15px] text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#971b22] text-white"
                              : "py-[5px] px-[15px] text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#FFB2B2] text-white"
                          }`}
                          onClick={() => handleLinkClick("Ambulance")}
                        >
                          Ambulance
                        </button>
                      </li>
                      <li>
                        <button
                          className={`${
                            activeMap === "Police"
                              ? "py-[5px] px-[15px] text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#971b22] text-white"
                              : "py-[5px] px-[15px] text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#FFB2B2] text-white"
                          }`}
                          onClick={() => handleLinkClick("Police")}
                        >
                          Police
                        </button>
                      </li>
                      <li>
                        <button
                          className={`${
                            activeMap === "Fire Service"
                              ? "py-[5px] px-[15px] text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#971b22] text-white"
                              : "py-[5px] px-[15px] text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#FFB2B2] text-white"
                          }`}
                          onClick={() => handleLinkClick("Fire Service")}
                        >
                          Fire Service
                        </button>
                      </li>
                      <li>
                        <button
                          className={`${
                            activeMap === "Road Safety"
                              ? "py-[5px] px-[15px] text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#971b22] text-white"
                              : "py-[5px] px-[15px] text-[16px] rounded-[20px] border-[1px] border-[#ccc] bg-[#FFB2B2] text-white"
                          }`}
                          onClick={() => handleLinkClick("Road Safety")}
                        >
                          Road Safety
                        </button>
                      </li>
                    </ul>

                    {activeMap === "All" && (
                      <Link to="/tracking">
                        <img src={allMap} alt="MAP" />
                      </Link>
                    )}

                    {activeMap === "Police" && (
                      <Link to="/policestations">
                        <img src={policeMap} alt="MAP" />
                      </Link>
                    )}

                    {activeMap === "Ambulance" && (
                      <Link to="/hospitals">
                        <img src={ambulanceMap} alt="MAP" />
                      </Link>
                    )}

                    {activeMap === "Fire Service" && (
                      <Link to="/firestations">
                        <img src={fireServiceMap} alt="MAP" />
                      </Link>
                    )}

                    {activeMap === "Road Safety" && (
                      <Link to="/frsc">
                        <img src={roadSafetyMap} alt="MAP" />
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <h1 className="text-center my-4 text-2xl font-semibold text-[#971B22]">
              Live Tracking
            </h1>
            <div className="flex h-[250px] w-screen gap-2 justify-evenly items-center">
              <div className="w-[45%] h-full bg-mobile-map">
                <Link to="/tracking">
                  <img className="h-full" src={mobileMap} alt="Mobile map" />
                </Link>
              </div>
              <div className="w-[45%] h-full bg-live-location bg-cover bg-center flex flex-col justify-center items-center text-white pt-[60px] px-3">
                <p className="flex items-center gap-3 mb-2">
                  {/* <FaLocationCrosshairs /> */}
                  {`Your current GPS coordinates: ${parseFloat(
                    location.coordinates.lat
                  ).toFixed(4)}, ${parseFloat(location.coordinates.lng).toFixed(
                    4
                  )}`}
                </p>

                <p className="flex items-center gap-3 mb-2">
                  {/* <FaTreeCity /> */}
                  {address ? (
                    <div>{`You're current in ${address.state}, ${address.country}`}</div>
                  ) : (
                    <div>Loading Location...</div>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden md:block">
          <Footer />
        </div>
      </div>
      <div className="md:hidden my-3">
        <MainMenu />
      </div>
    </div>
  );
}

export default HomePage;
