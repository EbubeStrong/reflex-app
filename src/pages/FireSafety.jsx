import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Dropdown from "../components/DropDown";
import { useAuth } from "../Contexts/AuthContext";

const FireSafety = () => {
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
          <h1 className="text-2xl font-bold mb-12">Fire safety</h1>
          <img
            src="images/Fire-extinguisher.png"
            alt="Fire safety kit"
            className="w-full rounded-md shadow-md"
          />
          <p className="mt-10 text-sm">
            Emergency response in cases of fire involves immediate actions to
            ensure the safety of individuals and property.
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
              Assess the Situation:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  Determine the type and size of the fire. Is it small and
                  contained, or is it large and spreading?
                </li>
                <li>
                  Assess the risk to personal safety and the safety of others in
                  the vicinity.
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Alert Others:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  If the fire is large or spreading rapidly, activate the fire
                  alarm or shout to alert others.
                </li>
                <li>
                  Inform occupants in the vicinity to evacuate the building
                  immediately.
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Evacuate Safely:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  Exit the building using the nearest safe exit route. Do not
                  use elevators.
                </li>
                <li>
                  Assist others who may need help evacuating, such as elderly
                  individuals or individuals with disabilities.
                </li>
                <li>
                  Close doors behind you to slow the spread of smoke and fire.
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Call Emergency Services
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  Dial the emergency services number (e.g., 911) to report the
                  fire.
                </li>
                <li>
                  Provide clear and concise information about the location and
                  severity of the fire.
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Follow Emergency Services Instructions:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  Follow instructions provided by emergency services personnel
                  upon their arrival.
                </li>
                <li>
                  Provide information about the location of the fire and any
                  individuals who may still be inside the building.
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Close Doors:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  Close doors behind you to prevent the spread of smoke and
                  fire.
                </li>
                <li>
                  This can help contain the fire and protect occupants in other
                  areas of the building.
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Do Not Re-enter the Building:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  Once outside, do not re-enter the building until emergency
                  services personnel declare it safe to do so.
                </li>
                <li>
                  Re-entering a burning building can be extremely dangerous and
                  should only be done by trained firefighters.
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Seek Medical Attention if Necessary:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  If you or others have sustained injuries during the fire, seek
                  medical attention promptly.
                </li>
                <li>
                  Even minor smoke inhalation or burns should be evaluated by
                  medical professionals.
                </li>
              </ul>
            </li>
            <li className="mb-4 text-lg">
              Prevent Future Fires:
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>
                  After the fire has been extinguished, take steps to prevent
                  future fires by addressing any fire hazards or safety concerns
                  identified.
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

export default FireSafety;
