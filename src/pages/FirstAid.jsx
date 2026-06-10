import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Dropdown from "../components/DropDown";
import { useAuth } from "../Contexts/AuthContext";

const FirstAid = () => {
  const { selectedOption, setSelectedOption, options } = useAuth();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <div className="flex flex-col md:flex-row p-8 bg-white text-gray-800">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-2xl font-bold mb-12">First aid tips</h1>
          <img
            src="images/first-aid-bag.png"
            alt="First aid kit"
            className="w-full rounded-md shadow-md"
          />
          <p className="mt-10 text-sm">
            Emergency first aid response involves providing immediate care to
            individuals who are injured or experiencing a sudden illness.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-5">
            <Dropdown
              label="See relevant information on"
              options={options}
              selectedOption={selectedOption}
              onOptionSelect={handleOptionSelect}
            />
          </div>
          <h2 className="font-medium text-xl text-gray-900 mb-3">
            Here's a summary of what to do:
          </h2>
          <ul className="list-decimal list-inside text-sm">
            <li className="mb-4 text-lg">
              Check Responsiveness:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>Gently tap the person and ask if they are okay.</li>
                <li>
                  If there is no response, shout for help and call emergency
                  services immediately.
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Assess the Situation:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  Ensure the scene is safe for both you and the injured person.
                </li>
                <li>
                  Check for any potential hazards or dangers, such as traffic,
                  fire, or electrical hazards.
                </li>
                <li>
                  If it's safe to do so, approach the person and assess their
                  condition.
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              (ABCs):
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  Open the person’s airway by tilting their head back and
                  lifting their chin.
                </li>
                <li>
                  Check for breathing by looking, listening, and feeling for
                  breaths.
                </li>
                <li>
                  If the person is not breathing, start CPR (cardiopulmonary
                  resuscitation) immediately.
                </li>
                <li>
                  Check for signs of circulation, such as a pulse or movement.
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Control Bleeding:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  Apply direct pressure to any bleeding wounds using a clean
                  cloth or bandage.
                </li>
                <li>
                  Elevate the injured limb if possible to reduce bleeding.
                </li>
                <li>
                  If bleeding is severe, apply a tourniquet above the wound if
                  trained to do so.
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Treat for Shock:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  Lay the person down on their back and elevate their legs if
                  there are no spinal injuries.
                </li>
                <li>
                  Cover the person with a blanket or jacket to keep them warm.
                </li>
                <li>Reassure the person and keep them calm.</li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Manage Fractures and Injuries:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  Immobilize any suspected fractures by splinting the injured
                  limb.
                </li>
                <li>
                  Do not attempt to realign the bone if it is protruding from
                  the skin (compound fracture).
                </li>
                <li>Apply ice packs to reduce swelling and pain.</li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Monitor Vital Signs:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  Continuously monitor the person's vital signs, including
                  pulse, breathing rate, and level of consciousness.
                </li>
                <li>
                  Be prepared to provide additional first aid as needed until
                  professional medical help arrives.
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Communicate with Emergency Services:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  Provide clear and concise information to emergency
                  dispatchers, including the person's condition, location, and
                  any other relevant details.
                </li>
                <li>
                  Follow instructions provided by emergency services personnel
                  over the phone.
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Obtain Consent:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>Obtain consent before providing treatment, if possible.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FirstAid;
