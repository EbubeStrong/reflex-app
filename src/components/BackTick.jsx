import React from "react";
import { useNavigate } from "react-router";
import backtick from "../images/hotlineImages/backtick.svg"

function BackTick() {
  const navigate = useNavigate();
  const goToPreviousPage = () => {
    navigate(-1);
  };
  return (
    <div>
      <img
      src={backtick}
      alt="BackTick"
      onClick={goToPreviousPage}
      className="cursor-pointer"/>
    </div>
  );
}

export default BackTick;
