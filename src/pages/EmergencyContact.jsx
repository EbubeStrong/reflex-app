import React from "react";
import NavBar from "../components/NavBar";
import phoneCall from "../images/quickTips/phoneCall.png";
import Footer from "../components/Footer";
import Dropdown from "../components/DropDown";
import { useAuth } from "../Contexts/AuthContext";

function EmergencyContact() {
  const { selectedOption, setSelectedOption, options } = useAuth();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="relative h-full bg-mobile-bg md:bg-desktop-bg bg-cover bg-center">
      <nav>
        <NavBar />
      </nav>

      <div className="container mx-auto p-4 md:flex">
        <div className="md:w-1/2 md:pr-10">
          <h1 className="font-bold text-2xl mt-6">EMERGENCY CONTACT</h1>
          <img
            src={phoneCall}
            className="rounded mt-6 w-full h-auto"
            alt="Phone Call"
          />
          <p className="text-wrap font-light text-lg text-gray-900 mt-6 leading-6">
            Having reliable emergency contacts readily available can be crucial
            in times of crisis. Here's detailed information on establishing and
            utilizing emergency contacts:
          </p>
        </div>

        <div className="mt-10 md:mt-0 md:w-1/2 md:pl-10">
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-5">
            <Dropdown
              label="See relevant information on"
              options={options}
              selectedOption={selectedOption}
              onOptionSelect={handleOptionSelect}
            />
          </div>

          <h3 className="font-medium text-xl text-gray-900 mb-3">
            Here's a summary of what to do:
          </h3>

          <div className="text-gray-800">
            <div className="flex">
              1.
              <p className="font-light text-2xl mb-3 px-2">
                {" "}
                Choosing Emergency Contacts:{" "}
              </p>
            </div>
            <ul className="list-disc font-light text-sm ml-5 px-5">
              <li>
                Select individuals who are familiar with your medical history,
                allergies, and any pre-existing conditions.
              </li>
              <li>
                Choose contacts who are readily available and can act quickly in
                an emergency.
              </li>
              <li>
                Consider including family members, close friends, neighbors, and
                healthcare providers in your emergency contacts list.
              </li>
            </ul>
          </div>

          <div className="mt-3 text-gray-800">
            <div className="flex">
              2.
              <p className="font-light text-2xl mb-3 px-2">
                Primary Emergency Contacts:
              </p>
            </div>
            <ul className="list-disc font-light text-sm ml-5 px-5">
              <li>
                Primary emergency contacts should be individuals who are
                authorized to make medical decisions on your behalf if you are
                unable to communicate.
              </li>
              <li>
                Provide them with copies of your medical information, insurance
                details, and advance directives, if applicable.
              </li>
              <li>
                Ensure they are aware of your preferences regarding medical
                treatment and end-of-life care.
              </li>
            </ul>
          </div>

          <div className="mt-3 text-gray-800">
            <div className="flex">
              3.
              <p className="font-light text-2xl mb-3 px-2">
                Secondary Emergency Contacts:
              </p>
            </div>
            <ul className="list-disc font-light text-sm ml-5 px-5">
              <li>
                Secondary emergency contacts should be individuals who can be
                reached if primary contacts are unavailable.
              </li>
              <li>
                Inform them of your primary emergency contacts and provide them
                with essential medical information.
              </li>
            </ul>
          </div>

          <div className="mt-3 text-gray-800">
            <div className="flex">
              4.
              <p className="font-light text-2xl mb-3 px-2">
                Emergency Contact Information:
              </p>
            </div>
            <ul className="list-disc font-light text-sm ml-5 px-5">
              <li>
                Carry a physical or digital copy of your emergency contact
                information at all times.
              </li>
              <li>
                Include details such as your name, emergency contacts, medical
                conditions, allergies, medications, and insurance information.
              </li>
              <li>
                Utilize medical alert bracelets or necklaces to provide critical
                information to first responders in case of an emergency.
              </li>
            </ul>
          </div>

          <div className="mt-3 text-gray-800">
            <div className="flex">
              5.
              <p className="font-light text-2xl mb-3 px-2">
                Establishing Communication Protocols:
              </p>
            </div>
            <ul className="list-disc font-light text-sm ml-5 px-5">
              <li>
                Clearly communicate with your emergency contacts about when and
                how to contact them in case of an emergency.
              </li>
              <li>
                Provide them with your preferred method of communication (phone
                call, text message, email) and ensure they have access to their
                phones or devices at all times.
              </li>
            </ul>
          </div>

          <div className="mt-3 text-gray-800">
            <div className="flex">
              6.
              <p className="font-light text-2xl mb-3 px-2">
                Regularly Review and Update Contacts:
              </p>
            </div>
            <ul className="list-disc font-light text-sm ml-5 px-5">
              <li>
                Review your emergency contacts list periodically and update it
                as needed.
              </li>
              <li>
                Inform your contacts of any changes to your medical information,
                contact details, or preferences regarding emergency care.
              </li>
            </ul>
          </div>

          <div className="mt-3 text-gray-800">
            <div className="flex">
              7.
              <p className="font-light text-2xl mb-3 px-2">
                Community Resources:
              </p>
            </div>
            <ul className="list-disc font-light text-sm ml-5 px-5">
              <li>
                Familiarize yourself with local community resources, such as
                emergency hotlines, crisis centers, and support groups.
              </li>
              <li>
                These resources can provide additional assistance and support
                during times of crisis.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default EmergencyContact;
