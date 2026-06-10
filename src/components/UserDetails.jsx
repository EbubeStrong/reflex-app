import React from "react";
import { Link } from "react-router-dom";

function UserDetails({ user }) {
  return (
    <main className="flex justify-between w-full text-gray-500">
      <section className="flex flex-col w-[50%] md:w-[25%] items-center pt-4">
        <img
          src="/images/user-profile-pic.png"
          alt="User profile"
          className="w-[60%] rounded-full"
        />
        <Link to="/userprofile">
          <button className="mt-2 border border-[#DF3442] text-sm md:text-base rounded-xl px-8 md:px-10 md:py-2">
            Edit profile
          </button>
        </Link>
      </section>
      <section>
        <div className="flex flex-col items-center border border-[#DF3442] px-10 md:px-70 py-2 rounded-2xl md:rounded-3xl mb-2">
          <p>Name</p>
          <p>{user.name || "Not Available"}</p>
        </div>
        <div className="flex flex-col items-center border border-[#DF3442] px-10 md:px-60 py-2 rounded-2xl md:rounded-3xl mb-2">
          <p>Blood type</p>
          <span>{user.bloodtype || "Not Available"}</span>
        </div>
        <div className="flex flex-col items-center border border-[#DF3442] px-10 md:px-60 py-2 rounded-2xl md:rounded-3xl mb-2">
          <p>Genotype</p>
          <span>{user.genotype || "Not Available"}</span>
        </div>
      </section>
    </main>
  );
}

export default UserDetails;
