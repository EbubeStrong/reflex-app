import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCog, FaUserAlt, FaInfoCircle, FaSignOutAlt } from "react-icons/fa";
import axios from "axios";
import { useAuth } from "../Contexts/AuthContext";

function Settings() {
  const handleOptionClick = (link) => {
    setActiveOption(link);
  };

  const navigate = useNavigate();
  const { setIsLoggedIn, activeOption, setActiveOption } = useAuth();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://rxe-lphv.onrender.com/auth/logout"
      );
      console.log("You've been logged out", response.data);
      setIsLoggedIn(false);
      navigate("/");
      localStorage.removeItem("userName");
    } catch (error) {
      console.error("Failed to log out:", error.message);
      throw error;
    }
  };

  return (
    <div className="bg-[#971B22] md:bg-[#F5F5F5] pl-8 pr-20 py-24 rounded-t-3xl md:rounded text-white md:text-black">
      <h5 className="flex justify-center md:justify-start text-base font-semibold mb-12">
        Settings
      </h5>
      <ul className="font-semibold">
        <li className="flex items-center mb-8">
          <FaCog className="pr-2 w-12 md:hidden" />
          <img
            src="/images/setting.png"
            alt=""
            className="hidden md:flex pr-2"
          />
          <Link
            to="/userprofile"
            onClick={() => handleOptionClick("Accountpreference")}
            className={`hover:text-[#D00000] ${
              activeOption === "Accountpreference" ? "text-[#D00000]" : ""
            }`}
          >
            Account preferences
          </Link>
        </li>
        <li className="flex items-center mb-8">
          <FaUserAlt className="pr-2 w-12 md:hidden" />
          <img
            src="/images/profile-circle.png"
            alt=""
            className="hidden md:flex pr-2"
          />
          <Link
            to="/emergencycontacts"
            onClick={() => handleOptionClick("Emergencycontacts")}
            className={`hover:text-[#D00000] ${
              activeOption === "Emergencycontacts" ? "text-[#D00000]" : ""
            }`}
          >
            Emergency contacts
          </Link>
        </li>
        <li className="flex items-center mb-8">
          <FaInfoCircle className="pr-2 w-12 md:hidden" />
          <img
            src="/images/24-support.png"
            alt="Support"
            className="hidden md:flex pr-2"
          />
          <Link
            to="/support"
            onClick={() => handleOptionClick("Support")}
            className={`hover:text-[#D00000] ${
              activeOption === "Support" ? "text-[#D00000]" : ""
            }`}
          >
            Support
          </Link>
        </li>
        <li
          onClick={handleLogout}
          className="flex justify-center md:justify-start items-center cursor-pointer hover:text-[#D00000]"
        >
          <FaSignOutAlt className="pr-2 w-12 md:hidden" />
          <img
            src="/images/logout.png"
            alt=""
            className="hidden md:flex pr-2"
          />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default Settings;
