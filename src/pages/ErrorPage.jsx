import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-mobile-bg md:bg-desktop-bg">
      <h1>Looks like you've lost your way</h1>
      <Link className="text-[#971B22]" to="/">
        Go back Home
      </Link>
    </div>
  );
}

export default ErrorPage;
