import React from "react";
import SignUp from "../components/SignUp";

function SignupPage() {
  return (
    <div className="h-screen bg-mobile-bg md:bg-desktop-bg bg:cover md:bg-contain">
      <nav className="hidden md:block px-8">
        <img
          className="mx-6 my-4"
          src="/images/logo.png"
          width={"100px"}
          height={"100px"}
          alt="logo"
        />
      </nav>
      <SignUp />
    </div>
  );
}

export default SignupPage;
