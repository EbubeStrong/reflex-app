import React from "react";
import Settings from "../components/Settings";
import { FaCircleXmark, FaCircleCheck } from "react-icons/fa6";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useAuth } from "../Contexts/AuthContext";

function AccountPreference() {
  const {
    userData,
    setUserData,
    setLastName,
    setLocation,
    setFirstName,
    setFullName,
  } = useAuth();

  const updateProfile = (userData) => {
    setFirstName(userData.firstName);
    setLastName(userData.lastName);
    setLocation(userData.location);
    setFullName(userData.fullName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const updatedProfile = updateProfile(userData);
      console.log("Profile updated successfully:", updatedProfile);
      alert("Profile updated successfully");
    } catch (error) {
      alert("Error updating profile. Please try again later.");
    }
  };

  const handleCancel = () => {
    setUserData();
  };

  return (
    <div className="relative h-full bg-mobile-bg md:bg-desktop-bg bg-cover bg-center">
      <NavBar />

      <div className="flex flex-col-reverse w-[98%] md:flex-row justify-evenly md:mx-4 md:my-8 text-lg md:text-base">
        <Settings />
        <div className="md:bg-[#F5F5F5] rounded md:pt-24 md:pb-72 px-4 md:w-[70%]">
          <div className="flex w-[100%] justify-center md:justify-start items-center gap-4 mb-12">
            <div className="flex justify-center items-center rounded-full border-2 border-black w-[150px] h-[150px]">
              <img
                src="/images/user-profile-pic.png"
                alt="User profile"
                className="w-[120px] h-[130x] rounded-full"
              />
            </div>
            <div className="font-light">
              <div className="flex space-x-2 bg-white px-4 py-2 rounded-xl cursor-pointer mb-2">
                <img src="/images/gallery.png" alt="Change" />
                <p className="text-sm">Change</p>
              </div>
              <div className="flex space-x-2 bg-white px-4 py-2 rounded-xl cursor-pointer">
                <img src="/images/trash.png" alt="Remove" />
                <p className="text-sm">Remove</p>
              </div>
            </div>
          </div>
          <form className="w-[100%] px-2" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="firstname">First name</label>
            </div>
            <input
              className="border rounded-lg font-light bg-[#F5F5F5] w-[100%] py-4 px-4 mb-4"
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Narzarh"
              value={userData.firstName}
              onChange={(e) =>
                setUserData({ ...userData, firstName: e.target.value })
              }
              required
            />
            <div className="mb-2">
              <label htmlFor="lastname">Last name</label>
            </div>
            <input
              className="border rounded-lg font-light bg-[#F5F5F5] w-full py-4 px-4 mb-4"
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Okafor"
              value={userData.lastName}
              onChange={(e) =>
                setUserData({ ...userData, lastName: e.target.value })
              }
              required
            />
            <div className="mb-2">
              <label htmlFor="location">Location</label>
              <div className="flex space-x-8 items-center">
                <div className="flex items-center space-x-2">
                  <img
                    src="images/flag-icon.png"
                    className="height-[20%]"
                    alt="Flag"
                  />
                  <img src="/images/Vector 2.png" alt="Vector" />
                </div>
                <input
                  className="border rounded-lg font-light bg-[#F5F5F5] w-full py-4 px-4 mb-6"
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Independence layout, Enugu."
                  value={userData.location}
                  onChange={(e) =>
                    setUserData({ ...userData, location: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="flex w-[100%] justify-evenly mb-8">
              <button
                type="button"
                className="md:hidden"
                onClick={handleCancel}
              >
                <FaCircleXmark className="w-10 h-10 cursor-pointer" />
              </button>

              <button
                type="button"
                className="hidden md:flex border border-[#B33625] text-[#B33625] md:px-44 py-2 rounded-lg"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button type="submit" className="md:hidden">
                <FaCircleCheck className="w-10 h-10 cursor-pointer" />
              </button>

              <button
                type="submit"
                className="hidden md:flex border border-[#B33625] md:px-44 py-2 text-[#B33625] rounded-lg"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AccountPreference;
