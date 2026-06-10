import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

function EmergencyContactsList() {
  const { contacts } = useAuth();
  const handleCall = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleMessage = (phone) => {
    window.location.href = `sms:${phone}`;
  };

  return (
    <main className="text-gray-500">
      <section className="flex justify-between border rounded-2xl py-4 px-2 mt-4 mb-4">
        <h2 className="text-lg">Emergency Contacts</h2>
        <button className="bg-[#DF3442] text-base text-white rounded-2xl px-4 py-2">
          <Link to="/contactform">+ Add contact</Link>
        </button>
      </section>
      {contacts.length === 0 ? (
        <p>No emergency contacts available.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className="mb-4 p-2 border border-[#DF3442] rounded-2xl"
            >
              <section className="flex justify-between items-center">
                <div className="flex gap-4">
                  <img
                    src={contact.picture}
                    alt={contact.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="">
                    <p className="text-xl">{contact.name}</p>
                    <p>{contact.relationship}</p>
                  </div>
                </div>
                <div className="flex">
                  <button
                    onClick={() => handleCall(contact.phone)}
                    className="btn btn-primary mr-2"
                  >
                    <img src="/images/call-icon.png" alt="Call" />
                  </button>
                  <button
                    onClick={() => handleMessage(contact.phone)}
                    className="btn btn-secondary"
                  >
                    <img src="/images/message-icon.png" alt="Message" />
                  </button>
                </div>
              </section>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default EmergencyContactsList;
