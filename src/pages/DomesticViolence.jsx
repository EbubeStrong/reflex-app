import React from "react";
import NavBar from "../components/NavBar";
import motherChild from "../images/quickTips/motherChild.png";
import Footer from "../components/Footer";
import Dropdown from "../components/DropDown";
import { useAuth } from "../Contexts/AuthContext";

function DomesticViolence() {
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
          <h1 className="font-bold text-2xl mt-6">Domestic Violence</h1>
          <img
            src={motherChild}
            className="rounded mt-6 w-full h-auto"
            alt="Domestic Violence Victims"
          />
          <p className="text-wrap font-light text-lg text-gray-900 mt-6 leading-6">
            Emergency response in cases of domestic violence requires a
            sensitive and comprehensive approach to ensure the safety and
            well-being of survivors.
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
                Safety Assessment:{" "}
              </p>
            </div>
            <ul className="list-disc font-light text-sm ml-5 px-5">
              <li>
                Ensure the safety of the survivor and any children present.
                Assess the immediate danger and potential for further violence.
                If the situation is life-threatening, call emergency services
                immediately.
              </li>
            </ul>
          </div>

          <div className="mt-3 text-gray-800">
            <div className="flex">
              2.
              <p className="font-light text-2xl mb-3 px-2">
                Immediate Assistance:
              </p>
            </div>
            <ul className="list-disc font-light text-sm ml-5 px-5">
              <li>
                Provide immediate assistance to the survivor, such as offering a
                safe place to stay or calling a crisis hotline. If injuries are
                present, administer first aid or seek medical attention as
                needed.
              </li>
            </ul>
          </div>

          <div className="mt-3 text-gray-800">
            <div className="flex">
              3.
              <p className="font-light text-2xl mb-3 px-2">Child Protection:</p>
            </div>
            <ul className="list-disc font-light text-sm ml-5 px-5">
              <li>
                If children are present, assess their safety and well-being and
                report any concerns to child protective services.
              </li>
              <li>
                Offer support and referrals to appropriate services for children
                who have witnessed or experienced domestic violence.
              </li>
            </ul>
          </div>

          <div className="mt-3 text-gray-800">
            <div className="flex">
              4.
              <p className="font-light text-2xl mb-3 px-2">Safety Planning:</p>
            </div>
            <ul className="list-disc font-light text-sm ml-5 px-5">
              <li>
                Collaborate with the survivor to create a safety plan tailored
                to their needs and circumstances.
              </li>
              <li>
                Identify safe places to go, emergency contacts, and strategies
                for managing future crises.
              </li>
              <li>
                Discuss options for obtaining legal protection, such as
                restraining orders or emergency shelter.
              </li>
            </ul>
          </div>

          <div className="mt-3 text-gray-800">
            <div className="flex">
              5.
              <p className="font-light text-2xl mb-3 px-2">
                Reporting and Documentation:
              </p>
            </div>
            <ul className="list-disc font-light text-sm ml-5 px-5">
              <li>
                Encourage the survivor to report the abuse to law enforcement
                and assist with documenting injuries and evidence.
              </li>
              <li>
                Maintain accurate records of the incident, including dates,
                times, and descriptions of the abuse.
              </li>
            </ul>
          </div>

          <div className="mt-3 text-gray-800">
            <div className="flex">
              6.
              <p className="font-light text-2xl mb-3 px-2">
                Referral to Support Services:
              </p>
            </div>
            <ul className="list-disc font-light text-sm ml-5 px-5">
              <li>
                Connect the survivor with local support services, such as
                domestic violence shelters, counseling, legal assistance, and
                advocacy organizations.
              </li>
              <li>
                Provide information on available resources and facilitate access
                to services.
              </li>
            </ul>
          </div>

          <div className="mt-3 text-gray-800">
            <div className="flex">
              7.
              <p className="font-light text-2xl mb-3 px-2">
                Collaboration and Coordination:
              </p>
            </div>
            <ul className="list-disc font-light text-sm ml-5 px-5">
              <li>
                Work collaboratively with other agencies and professionals
                involved in the survivor's care, such as law enforcement,
                healthcare providers, social workers, and legal advocates.
              </li>
              <li>
                Share information and coordinate efforts to ensure a
                comprehensive and cohesive response to domestic violence cases.
              </li>
            </ul>
          </div>

          <div className="mt-3 text-gray-800">
            <div className="flex">
              8.
              <p className="font-light text-2xl mb-3 px-2">
                Advocacy and Prevention:
              </p>
            </div>
            <ul className="list-disc font-light text-sm ml-5 px-5">
              <li>
                Advocate for policy changes and community initiatives aimed at
                preventing domestic violence and supporting survivors.
              </li>
              <li>
                .Educate the public about the signs of domestic violence,
                available resources, and how to intervene safely and
                effectively.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default DomesticViolence;
