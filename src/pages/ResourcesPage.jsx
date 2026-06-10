import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import firstAid from "../images/quickTips/firstAid.png";
import fireExtinguisher from "../images/quickTips/fireExtinguisher.png";
import driver from "../images/quickTips/driver.png";
import drugs from "../images/quickTips/drugs.png";
import motherChild from "../images/quickTips/motherChild.png";
import phoneCall from "../images/quickTips/phoneCall.png";
import "../style/quickTips.css";
import Footer from "../components/Footer";

function ResourcesPage() {
  return (
    <div className="relative h-full bg-mobile-bg md:bg-desktop-bg bg-cover bg-center">
      <nav>
        <NavBar />
      </nav>
      <div className="flex flex-col items-start bg-mobile text-2xl mt-10 px-4 md:px-24 font-bold">
        <h1 className="text-center mb-6">Quick Tips & Resources</h1>
      </div>

      <div className="quick-tips grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
        <Link to="/firstaid">
          <div className="flex flex-col items-center hover:opacity-70">
            <img src={firstAid} alt="First Aid" className="w-full h-auto" />
            <p className="firstaid-tips text-center mt-2 mx-10 flex items-start">
              First-aid tips
            </p>
          </div>
        </Link>
        <Link to="/firesafety">
          <div className="flex flex-col items-center hover:opacity-70">
            <img
              src={fireExtinguisher}
              alt="Fire Extinguisher"
              className="w-full h-auto"
            />
            <p className="fire-tips text-center mt-2 mx-10">Fire safety</p>
          </div>
        </Link>
        <Link to="/roadsafetytips">
          <div className="flex flex-col items-center hover:opacity-70">
            <img src={driver} alt="Driver" className="w-full h-auto" />
            <p className="driver-tips text-center mt-2">Road & driver safety</p>
          </div>
        </Link>
        <Link to="/substance-abuse">
          <div className="flex flex-col items-center hover:opacity-70">
            <img src={drugs} alt="Drugs" className="w-full h-auto" />
            <p className="drug-tips text-center mt-2">Substance abuse</p>
          </div>
        </Link>
        <Link to="/domestic-violence">
          <div className="flex flex-col items-center hover:opacity-70">
            <img
              src={motherChild}
              alt="Mother and child"
              className="w-full h-auto"
            />
            <p className="violence-tips text-center mt-2">Domestic violence</p>
          </div>
        </Link>
        <Link to="/emergency-contacts">
          <div className="flex flex-col items-center hover:opacity-70">
            <img src={phoneCall} alt="Phone Call" className="w-full h-auto" />
            <p className="emergency-tips text-center mt-2">
              Emergency contacts
            </p>
          </div>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default ResourcesPage;
