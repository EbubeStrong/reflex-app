import React, { createContext, useState, useContext, useEffect } from "react";
import defaultContacts from "../defaultContacts.json";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [activeMap, setActiveMap] = useState("All");
  const [activeLink, setActiveLink] = useState("Home");

  // Initialize isLoggedIn from localStorage
  const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const [isLoggedIn, setIsLoggedIn] = useState(storedIsLoggedIn);
  const [isVerified, setIsVerified] = useState(false);
  const [activeOption, setActiveOption] = useState("Accountpreference");
  const [contacts, setContacts] = useState(defaultContacts);

  const handleNewContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const options = [
    "First Aid",
    "Fire Safety",
    "Road Safety",
    "Substance Abuse",
    "Domestic Violence",
    "Emergency Contacts",
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  // Retrieve userName from localStorage and split into first and last name
  const userName = localStorage.getItem("userName") || "";
  const nameParts = userName.trim() ? userName.trim().split(" ") : ["", ""];
  const initialFirstname = nameParts[0];
  const initialLastname = nameParts.slice(1).join(" ");
  const [firstName, setFirstName] = useState(initialFirstname);
  const [lastName, setLastName] = useState(initialLastname);
  const [location, setLocation] = useState("");

  const [userData, setUserData] = useState({
    firstName: initialFirstname,
    lastName: initialLastname,
    fullName: `${initialFirstname} ${initialLastname}`,
    location,
  });

  // Save isLoggedIn to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("isVerified", isVerified);
  }, [isVerified]);

  useEffect(() => {
    setUserData({
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`,
      location,
    });
  }, [firstName, lastName, location]);

  return (
    <AuthContext.Provider
      value={{
        userData,
        firstName,
        lastName,
        location,
        setUserData,
        setLastName,
        setLocation,
        setFirstName,
        activeLink,
        setActiveLink,
        isLoggedIn,
        setIsLoggedIn,
        isVerified,
        setIsVerified,
        contacts,
        setContacts,
        activeMap,
        setActiveMap,
        activeOption,
        setActiveOption,
        handleNewContact,
        selectedOption,
        setSelectedOption,
        options,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
