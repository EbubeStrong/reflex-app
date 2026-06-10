import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Dropdown from "../components/DropDown";
import { useAuth } from "../Contexts/AuthContext";

const RoadAndDriverSafety = () => {
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
          <h1 className="text-2xl font-bold mb-12">Road & Driver safety</h1>
          <img
            src="images/man-on-car.png"
            alt="Road and driver safety kit"
            className="w-full rounded-md shadow-md"
          />
          <p className="mt-10 text-sm">
            Emergency response in cases of road and driver accidents involves
            providing immediate care to individuals involved in the accident,
            ensuring their safety, and coordinating with emergency services to
            provide timely medical assistance.
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
              Assess the Scene:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  Ensure your safety and the safety of others before approaching
                  the accident scene.
                </li>
                <li>
                  Park your vehicle in a safe location and turn on hazard lights
                  to alert other drivers.
                </li>
                <li>
                  Assess the severity of the accident and the number of people
                  involved.
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Call Emergency Services:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  Dial the local emergency number (e.g., 911) to report the
                  accident and request medical assistance.
                </li>
                <li>
                  Provide clear and concise information about the location of
                  the accident, the number of vehicles involved, and any
                  injuries.
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Check for Injuries:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  Approach the vehicles involved in the accident with caution.
                </li>
                <li>
                  Check for injuries among drivers, passengers, and pedestrians
                  involved in the accident.
                </li>
                <li>
                  Assess the severity of injuries and prioritize care for
                  individuals with life-threatening conditions.
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Provide First Aid:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  If you are trained in first aid, provide immediate care to
                  injured individuals.
                </li>
                <li>
                  Control bleeding by applying pressure to wounds using clean
                  cloths or bandages.
                </li>
                <li>
                  Check airway, breathing, and circulation (ABCs) and perform
                  CPR if necessary.
                </li>
                <li>
                  Keep injured individuals warm and comfortable while awaiting
                  medical help.
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Ensure Scene Safety:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  Use hazard triangles or flares to warn approaching traffic and
                  prevent further accidents.
                </li>
                <li>
                  Direct traffic away from the accident scene if it is safe to
                  do so.
                </li>
                <li>
                  Do not move injured individuals unless they are in immense
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Gather Information:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  Obtain information from drivers involved in the accident,
                  including names, contact details, and insurance information.
                </li>
                <li>
                  Document the accident scene by taking photos or videos, if
                  possible.
                </li>
                <li>
                  Provide your contact information to law enforcement officers
                  and emergency responders for follow-up.
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Support Injured Individuals:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  Offer emotional support and reassurance to injured individuals
                  and witnesses of the accident.
                </li>
                <li>
                  Stay with them until emergency responders take over their care
                  or they are transported to a medical facility.
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Follow Up:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  Follow up with law enforcement officers or emergency services
                  personnel if needed to provide additional information or
                  assistance.
                </li>
                <li>
                  Seek medical attention for yourself if you were involved in
                  the accident or if you experience any injuries or symptoms
                  afterward.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RoadAndDriverSafety;
