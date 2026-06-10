import React, { useState, useEffect } from "react";
import Settings from "../components/Settings";
import axios from "axios";
import UserDetails from "../components/UserDetails";
import EmergencyContactsList from "../components/EmergencyContactsList";
import { useAuth } from "../Contexts/AuthContext";
import NavBar from "../components/NavBar";
import BackTick from "../components/BackTick";
import Footer from "../components/Footer";

function EmergencyContacts() {
  const { contacts, userData } = useAuth();
  const defaultUser = {
    name: userData.fullName,
    bloodtype: "Not Available",
    genotype: "Not Available",
  };
  const [user, setUser] = useState(defaultUser);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          setLoading(false); // No user ID found, use default user
          return;
        }

        const userResponse = await axios.get(
          `https://reflex1-3.onrender.com/api/users/${userId}`
        );
        setUser(userResponse.data);
      } catch (err) {
        setError(err.response ? err.response.data.message : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="">
      <nav>
        <NavBar />
      </nav>
      <div className="mx-2">
        <div className="px-4 pb-8 md:hidden">
          <BackTick />
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between md:mx-8 md:my-8 text-xs md:text-base">
          <div className="hidden md:flex">
            <Settings />
          </div>
          <div className="md:bg-[#F5F5F5] rounded md:px-4 md:pt-4 md:pb-24 md:w-[70%]">
            <UserDetails user={user} />
            <EmergencyContactsList contacts={contacts} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EmergencyContacts;
