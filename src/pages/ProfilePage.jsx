import React from "react";
import NavBar from "../components/NavBar";
import Settings from "../components/Settings";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <div>
      <div className="relative h-full bg-mobile-bg md:bg-desktop-bg bg-cover bg-center ">
        <nav className="hidden md:block">
          <NavBar />
        </nav>

        <div className="flex flex-col-reverse w-[98%] md:flex-row justify-evenly md:mx-4 md:my-8 text-lg md:text-base">
          <Settings />
          <div className="md:bg-[#F5F5F5] rounded md:pt-24 md:pb-72 px-4 md:w-[70%]">
            <div className="flex flex-col w-[100%] justify-center md:justify-start items-center gap-4 mb-12">
              <img
                src="/images/profile-pic.png"
                alt="User profile"
                className="w-[15%] rounded-full"
              />
              <div className="font-light">
                <div className="flex space-x-2 bg-white px-10 py-2 rounded-2xl cursor-pointer mb-2 border-[1px] border-[#B33625] hover:bg-[#B33625] hover:text-white">
                  <Link to="/accountpreference">
                    <button className="text-sm">Edit profile</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-[100%] px-2"></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ProfilePage;
