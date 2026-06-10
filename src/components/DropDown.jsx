import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import firstAid from "../images/quickTips/firstAid.png";
import fireExtinguisher from "../images/quickTips/fireExtinguisher.png";
import driver from "../images/quickTips/driver.png";
import drugs from "../images/quickTips/drugs.png";
import motherChild from "../images/quickTips/motherChild.png";
import phoneCall from "../images/quickTips/phoneCall.png";

const Dropdown = ({ options, selectedOption, onOptionSelect, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onOptionSelect(option);
    setIsOpen(false);
    if (option === "First Aid") {
      window.location.href = "/firstaid";
    } else if (option === "Fire Safety") {
      window.location.href = "/firesafety";
    } else if (option === "Road Safety") {
      window.location.href = "/roadsafetytips";
    } else if (option === "Substance Abuse") {
      window.location.href = "/substance-abuse";
    } else if (option === "Domestic Violence") {
      window.location.href = "/domestic-violence";
    } else if (option === "Emergency Contacts") {
      window.location.href = "/emergency-contact";
    }
  };

  const getImageForOption = (option) => {
    switch (option) {
      case "First Aid":
        return firstAid;
      case "Fire Safety":
        return fireExtinguisher;
      case "Road Safety":
        return driver;
      case "Substance Abuse":
        return drugs;
      case "Domestic Violence":
        return motherChild;
      case "Emergency Contacts":
        return phoneCall;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-[13px] w-[100px] md:w-[200px] md:text-md">
        {label}
      </span>
      <div className="relative">
        <button
          className="flex items-center border border-red-600 rounded-full px-4 py-2 focus:outline-none"
          onClick={handleToggle}
        >
          <img
            src={getImageForOption(selectedOption)}
            alt="Selected"
            className="w-6 h-6 rounded-full mr-2"
          />

          {selectedOption}
          <FaChevronDown className="ml-2 text-[#971B22]" />
        </button>
        {isOpen && (
          <ul className="absolute text-[13px] md:text-md right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
