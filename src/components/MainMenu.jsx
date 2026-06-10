import React, { useState } from "react";
import { RiHome2Line } from "react-icons/ri";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { Link } from "react-router-dom";

function MainMenu() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (isActive) => {
    setIsActive(isActive);
  };

  return (
    <div className="relative rounded-xl w-full h-[50px] flex text-md justify-center items-center px-5 py-10 text-black font-light">
      {/*container for the icons*/}
      <nav>
        <ul className="flex justify-center gap-10">
          <li className="">
            <Link
              to="/"
              onClick={() => handleClick("Home")}
              className={isActive === "Home" ? "text-[#960E20]" : ""}
            >
              <RiHome2Line size={"25px"} className="mx-2" /> <span> Home </span>
            </Link>
          </li>

          <li>
            <Link
              to="/tracking"
              onClick={() => handleClick("Location")}
              className={isActive === "Location" ? "text-[#960E20]" : ""}
            >
              <CiLocationArrow1 size={"25px"} className="mx-3" />{" "}
              <span>Location</span>
            </Link>
          </li>

          <li>
            <Link
              to="/emergencycontacts"
              onClick={() => handleClick("Call")}
              className={isActive === "Call" ? "text-[#960E20]" : ""}
            >
              <IoCallOutline size={"25px"} className="mx-0.2" />{" "}
              <span>Call</span>
            </Link>
          </li>

          <li>
            <Link
              to="/resources"
              onClick={() => handleClick("Resource")}
              className={isActive === "Resource" ? "text-[#960E20]" : ""}
            >
              <MdOutlineLibraryBooks size={"25px"} className="mx-4" />{" "}
              <span>Resource</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainMenu;
