import React from "react";
import ambulance from "../images/hotlineImages/AmbulanceCross.svg";
import fireservice from "../images/hotlineImages/fireService.svg";
import police from "../images/hotlineImages/police.svg";
import plusIcon from "../images/hotlineImages/plusIcon.svg";
import { Link } from "react-router-dom";
function HomepageHotlines() {
  const widthSize = window.innerWidth;
  return (
    <div className="flex justify-center items-center ">
      <div className="md:hidden gap-1 w-screen flex items-center my-3">
        <a
          href={widthSize >= 768 ? "#" : "tel:+234067157635"}
          className="flex flex-col flex-wrap justify-center items-center text-center "
        >
          <div className="border-2 border-[#DC1D2DE6] rounded-full h-20 w-20 flex justify-center items-center">
            <img className="w-16 h-16" src={ambulance} alt="Ambulance" />
          </div>
          <span className="w-24 text-sm">Ambulance</span>
        </a>
        <a
          href={widthSize >= 768 ? "#" : "tel:+2347065409291"}
          className="flex flex-col flex-wrap justify-center items-center text-center  "
        >
          <div className="border-2 border-[#DC1D2DE6] rounded-full h-20 w-20 flex justify-center items-center">
            <img className="w-16 h-16" src={fireservice} alt="Fire Service" />
          </div>
          <span className="w-24 text-sm">Fire Service</span>
        </a>
        <a
          href={widthSize >= 768 ? "#" : "tel:+2348032003702"}
          className="flex flex-col flex-wrap justify-center items-center text-center  "
        >
          <div className="border-2 border-[#DC1D2DE6] rounded-full h-20 w-20 flex justify-center items-center">
            <img className="w-16 h-16" src={police} alt="Police" />
          </div>
          <span className="w-24 text-sm">Police</span>
        </a>
      </div>
      <div className="relative -top-2 shadow-md bg-blue-100 rounded-l-full w-[90px] h-14 flex items-center justify-center">
        <Link to="/emergencyhotlines">
          <img src={plusIcon} alt="add" />
        </Link>
      </div>
    </div>
  );
}

export default HomepageHotlines;
