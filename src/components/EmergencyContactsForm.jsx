import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import NavBar from "./NavBar";
import Footer from "./Footer";

function EmergencyContactsForm() {
  const { handleNewContact } = useAuth();
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [phone, setPhone] = useState("");
  const [picture, setPicture] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: Date.now().toString(), // simple unique ID for demo purposes
      name,
      relationship,
      phone,
      picture,
    };
    handleNewContact(newContact);
    setName("");
    setRelationship("");
    setPhone("");
    navigate("/emergencycontacts");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPicture(URL.createObjectURL(file));
    } else {
      setPicture(null);
    }
  };

  return (
    <div className="relative overflow-hidden h-full bg-mobile-bg md:bg-desktop-bg bg-cover bg-center">
      <nav>
        <NavBar />
      </nav>

      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="flex justify-center mt-2 text-2xl font-bold text-[#DF3442]">
          New Emergency Contact
        </h2>
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="w-screen px-5 py-7">
            <div className=" mb-4">
              <label htmlFor="name" className="block font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-[#DF3442] w-full md:w-1/2 rounded p-2"
                required
              />
            </div>
            <div className=" mb-4">
              <label
                htmlFor="relationship"
                className="block font-semibold mb-1"
              >
                Relationship
              </label>
              <input
                type="text"
                id="relationship"
                name="relationship"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                className="border border-[#DF3442] w-full md:w-1/2 rounded p-2"
                required
              />
            </div>
            <div className=" mb-4">
              <label htmlFor="phone" className="block font-semibold mb-1">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border border-[#DF3442] w-full md:w-1/2 rounded p-2"
                required
              />
            </div>
            <div className=" mb-4">
              <label className="block font-semibold mb-1" htmlFor="picture">
                Contact Picture
              </label>
              <input
                type="file"
                id="picture"
                name="picture"
                onChange={handleFileChange}
                className="border border-[#DF3442] w-full md:w-1/2 rounded p-8"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary bg-[#DF3442] text-white border rounded-xl px-8 py-3 mt-2"
            >
              Add Contact
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default EmergencyContactsForm;
