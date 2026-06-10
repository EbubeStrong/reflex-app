import React from "react";
import frsc from "../images/hotlineImages/frsc.svg";
import sss from "../images/hotlineImages/ssService.svg";
import ncc from "../images/hotlineImages/ncc.svg";
import ndlea from "../images/hotlineImages/ndlea.svg";
import eswama from "../images/hotlineImages/eswama.svg";
import erAfrica from "../images/hotlineImages/erAfrica.svg";
import ambulance from "../images/hotlineImages/ambulance.svg";
import fireService from "../images/hotlineImages/fireService.svg";
import police from "../images/hotlineImages/police.svg";
import { useState } from "react";

function ServiceProviders() {
  const [serviceName, setServiceName] = useState("");

  const handleButton = (imageName) => {
    setServiceName(imageName);
  };

  const widthSize = window.innerWidth;

  return (
    <div>
      <div className="flex justify-center items-center mt-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-x-0 md:gap-y-20 h-auto w-auto  text-[#B33625]">
          <button
            onClick={() => handleButton("ambulance")}
            className={
              serviceName === "ambulance"
                ? "hidden md:block md:bg-red-300 md:text-black rounded-3xl cursor-pointer"
                : "hidden md:block cursor-pointer"
            }
          >
            <div className="flex flex-col flex-wrap justify-center items-center text-center ">
              <div
                className={
                  serviceName === "ambulance"
                    ? "shadow-md md:shadow-none h-24 w-24 flex justify-center items-center"
                    : " shadow-md md:shadow-none md:border-2 md:border-[#DC1D2DE6] md:rounded-full h-24 w-24 flex justify-center items-center"
                }
              >
                <img
                  className="w-16 h-20 md:w-20 md:h-20 "
                  src={ambulance}
                  alt="Ambulance"
                />
              </div>
              <span className=" w-24 text-base">Ambulance</span>
            </div>
          </button>
          <button
            onClick={() => handleButton("fireService")}
            className={
              serviceName === "fireService"
                ? "hidden md:block bg-red-300 rounded-3xl text-black"
                : "hidden md:block"
            }
          >
            <div className="flex flex-col flex-wrap justify-center items-center text-center">
              <div
                className={
                  serviceName === "fireService"
                    ? "border-0"
                    : "border-2 border-[#DC1D2DE6] rounded-full h-24 w-24 flex justify-center items-center"
                }
              >
                <img
                  className="w-20 h-20"
                  src={fireService}
                  alt="Fire Service"
                />
              </div>
              <span className="w-24 text-base text-[#B33625]">
                Fire Service
              </span>
            </div>
          </button>

          <button
            onClick={() => handleButton("police")}
            className={
              serviceName === "police"
                ? "hidden md:block md:bg-red-300 md:text-black md:rounded-3xl"
                : "hidden md:block"
            }
          >
            <div className="flex flex-col flex-wrap justify-center items-center text-center  ">
              <div
                className={
                  serviceName === "police"
                    ? " shadow-md md:shadow-none border-0 h-24 w-24 flex justify-center items-center"
                    : " shadow-md md:shadow-none md:border-2 md:border-[#DC1D2DE6] md:rounded-full h-24 w-24 flex justify-center items-center"
                }
              >
                <img className="w-20 h-20" src={police} alt="Police" />
              </div>
              <span className="w-24">Police</span>
            </div>
          </button>
          <a
            href={widthSize >= 768 ? "#" : "tel:122"}
            onClick={() => handleButton("frsc")}
            className={
              serviceName === "frsc"
                ? "md:bg-red-300 md:text-black md:rounded-3xl md:mr-4 cursor-pointer"
                : "cursor-pointer"
            }
          >
            <div className="flex flex-col flex-wrap justify-center items-center text-center ">
              <div
                className={
                  serviceName === "frsc"
                    ? "shadow-md  bg-white md:bg-opacity-0 md:shadow-none h-24 w-24 border-0 rounded-3xl flex justify-center items-center"
                    : "shadow-md  bg-white md:shadow-none md:border-2 md:border-[#DC1D2DE6] rounded-3xl md:rounded-full h-24 w-24 flex justify-center items-center"
                }
              >
                <img className="w-20 h-20" src={frsc} alt="FRSC" />
              </div>
              <span className="w-24">FRSC</span>
            </div>
          </a>
          <a
            href={widthSize >= 768 ? "#" : "tel:+2348132222105"}
            onClick={() => handleButton("sss")}
            className={
              serviceName === "sss"
                ? "md:bg-red-300 md:text-black md:rounded-3xl cursor-pointer"
                : "cursor-pointer"
            }
          >
            <div className="flex flex-col flex-wrap justify-center items-center text-center md:-ml-3">
              <div
                className={
                  serviceName === "sss"
                    ? "shadow-md  bg-white md:bg-opacity-0 md:shadow-none border-0 h-24 w-24 rounded-3xl flex justify-center items-center"
                    : "shadow-md  bg-white md:shadow-none md:border-2 md:border-[#DC1D2DE6] rounded-3xl md:rounded-full h-24 w-24 flex justify-center items-center"
                }
              >
                <img className="w-20 h-20" src={sss} alt="SSS" />
              </div>
              <span
                className={
                  serviceName === "sss"
                    ? "w-24 md:w-36 md:text-md md:font-light md:pl-3"
                    : "w-24 md:w-36 "
                }
              >
                State Sec. Service
              </span>
            </div>
          </a>
          <a
            href={widthSize >= 768 ? "#" : "tel:112"}
            onClick={() => handleButton("ncc")}
            className={
              serviceName === "ncc"
                ? "md:bg-red-300 md:text-black rounded-3xl cursor-pointer"
                : "cursor-pointer"
            }
          >
            <div className="flex flex-col flex-wrap justify-center items-center text-center ">
              <div
                className={
                  serviceName === "ncc"
                    ? "shadow  bg-white md:bg-opacity-0 md:shadow-none border-0 h-24 w-24 rounded-3xl flex justify-center items-center"
                    : "shadow  bg-white md:shadow-none md:border-2 md:border-[#DC1D2DE6] rounded-3xl md:rounded-full h-24 w-24 flex justify-center items-center"
                }
              >
                <img className="w-20 h-20" src={ncc} alt="NCC" />
              </div>
              <span className="w-24">NCC</span>
            </div>
          </a>
          <a
            href={widthSize >= 768 ? "#" : "tel:+234803347868"}
            onClick={() => handleButton("ndlea")}
            className={
              serviceName === "ndlea"
                ? "md:bg-red-300 md:text-black md:rounded-3xl cursor-pointer"
                : "cursor-pointer"
            }
          >
            <div className="flex flex-col flex-wrap justify-center items-center text-center">
              <div
                className={
                  serviceName === "ndlea"
                    ? "shadow  bg-white md:bg-opacity-0 md:shadow-none border-0 h-24 w-24 rounded-3xl flex justify-center items-center"
                    : "shadow  bg-white md:shadow-none md:border-2 md:border-[#DC1D2DE6] rounded-3xl md:rounded-full h-24 w-24 flex justify-center items-center"
                }
              >
                <img className="w-20 h-20" src={ndlea} alt="NDLEA" />
              </div>
              <span className="w-24">NDLEA</span>
            </div>
          </a>
          <a
            href={widthSize >= 768 ? "#" : "tel:+2348037326662"}
            onClick={() => handleButton("eswama")}
            className={
              serviceName === "eswama"
                ? "md:bg-red-300 md:text-black md:rounded-3xl cursor-pointer"
                : "cursor-pointer"
            }
          >
            <div className="flex flex-col flex-wrap justify-center items-center text-center ">
              <div
                className={
                  serviceName === "eswama"
                    ? "shadow  bg-white md:bg-opacity-0 md:shadow-none h-24 w-24 border-0 rounded-3xl flex justify-center items-center"
                    : "shadow  bg-white md:shadow md:border-2 md:border-[#DC1D2DE6] rounded-3xl md:rounded-full h-24 w-24 flex justify-center items-center"
                }
              >
                <img className="w-20 h-20" src={eswama} alt="ESWAMA" />
              </div>
              <span className="w-24">ESWAMA</span>
            </div>
          </a>
          <a
            href={widthSize >= 768 ? "#" : "tel:080002255372"}
            onClick={() => handleButton("erAfrica")}
            className={
              serviceName === "erAfrica"
                ? "md:bg-red-300 md:text-black md:rounded-3xl cursor-pointer"
                : "cursor-pointer"
            }
          >
            <div className="flex flex-col flex-wrap justify-center items-center text-center ">
              <div
                className={
                  serviceName === "erAfrica"
                    ? "shadow  bg-white md:bg-opacity-0 md:shadow-none h-24 w-24  border-0 rounded-3xl flex justify-center items-center"
                    : "shadow  bg-white md:shadow-none md:border-2 md:border-[#DC1D2DE6] rounded-3xl md:rounded-full h-24 w-24 flex justify-center items-center"
                }
              >
                <img className="w-20 h-20" src={erAfrica} alt="erAfrica" />
              </div>
              <span>E.R Africa</span>
            </div>
          </a>
        </div>
        <div
          className={
            serviceName === "ambulance" ? " hidden md:block w-5/12" : "hidden"
          }
        >
          <h3 className="text-center text-2xl font-bold pl-1">
            Emergency Service Contacts
          </h3>
          <div
            className={serviceName === "ambulance" ? "pl-[110px]" : "hidden"}
          >
            <span className="block my-2">Memphis Ambulance Response Team</span>
            <span className="text-[#B33625]">Contact: +234067157635</span>
          </div>
        </div>
        <div
          className={
            serviceName === "fireService" ? "hidden md:block w-5/12" : "hidden"
          }
        >
          <h3 className="text-center text-2xl font-bold pl-1">
            Emergency Service Contacts
          </h3>
          <div
            className={serviceName === "fireService" ? "pl-[110px]" : "hidden"}
          >
            <span className="block my-2">Enugu State Fire Service</span>
            <span className="text-[#B33625]">Contact: +2347065409291</span>
          </div>
        </div>
        <div
          className={
            serviceName === "police" ? " hidden md:block w-5/12" : "hidden"
          }
        >
          <h3 className="text-center text-2xl font-bold pl-1">
            Emergency Service Contacts
          </h3>
          <div className={serviceName === "police" ? "pl-[110px]" : "hidden"}>
            <span className="block my-2">Police swift response team</span>
            <span className="text-[#B33625]">Contact: +2348032003702</span>
          </div>
        </div>
        <div
          className={
            serviceName === "frsc" ? "hidden md:block w-5/12" : "hidden"
          }
        >
          <h3 className="text-center text-2xl font-bold pl-1">
            Emergency Service Contacts
          </h3>
          <div className={serviceName === "frsc" ? "pl-[110px]" : "hidden"}>
            <span className="block my-2">Federal Road Safety Corp</span>
            <span className="text-[#B33625]">Contact: 122</span>
          </div>
        </div>
        <div
          className={
            serviceName === "sss" ? "hidden md:block w-5/12" : "hidden"
          }
        >
          <h3 className="text-center text-2xl font-bold pl-1">
            Emergency Service Contacts
          </h3>
          <div className={serviceName === "sss" ? "pl-[110px]" : "hidden"}>
            <span className="block my-2">State Security Service</span>
            <span className="text-[#B33625]">Contact: +2348132222105</span>
          </div>
        </div>
        <div
          className={
            serviceName === "ncc" ? "hidden md:block w-5/12" : "hidden"
          }
        >
          <h3 className="text-center text-2xl font-bold pl-1">
            Emergency Service Contacts
          </h3>
          <div className={serviceName === "ncc" ? "pl-[110px]" : "hidden"}>
            <span className="block my-2">
              Nigerian Communications Commision
            </span>
            <span className="text-[#B33625]">Contact: 112</span>
          </div>
        </div>
        <div
          className={
            serviceName === "ndlea" ? "hidden md:block w-5/12" : "hidden"
          }
        >
          <h3 className="text-center text-2xl font-bold pl-1">
            Emergency Service Contacts
          </h3>
          <div className={serviceName === "ndlea" ? "pl-[110px]" : "hidden"}>
            <span className="block my-2">
              National Drug Law Enforcement Agency
            </span>
            <span className="text-[#B33625]">Contact: +234803347868</span>
          </div>
        </div>
        <div
          className={
            serviceName === "eswama" ? "hidden md:block w-5/12" : "hidden"
          }
        >
          <h3 className="text-center text-2xl font-bold pl-1">
            Emergency Service Contacts
          </h3>
          <div className={serviceName === "eswama" ? "pl-[110px]" : "hidden"}>
            <span className="block my-2">
              Enugu State Waste Management Authority
            </span>
            <span className="text-[#B33625]">Contact: +2348037326662</span>
          </div>
        </div>
        <div
          className={
            serviceName === "erAfrica" ? " hidden md:block w-5/12" : "hidden"
          }
        >
          <h3 className="text-center text-2xl font-bold pl-1">
            Emergency Service Contacts
          </h3>
          <div className={serviceName === "erAfrica" ? "pl-[110px]" : "hidden"}>
            <span className="block my-2">Emergency Response Africa </span>
            <span className="text-[#B33625]">Contact: 080002255372</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProviders;
