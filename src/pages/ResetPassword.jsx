import React, { useState } from "react";
import "../style/style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import ImageCarousel from "../components/ImageCarousel";

function ResetPassword() {
  const img1 = "images/signup-1.png";
  const img2 = "images/signup-2.png";
  const img3 = "images/signup-3.png";

  const [getCode, SetGetCode] = useState("one");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    SetGetCode("two");
    try {
      const response = await axios.post(
        "https://rxe-lphv.onrender.com/auth/forgotpassword",
        {
          email: email,
        }
      );
      console.log("Link sent Successfully:", response.data);
    } catch (error) {
      console.error("Link not sent:", error.message);
    }
  };

  return (
    <div className="h-[100vh] bg-mobile-bg md:bg-desktop-bg bg:cover md:bg-contain bg-center">
      <nav className="hidden md:block px-20 my-4">
        <img
          src="/images/logo.png"
          width={"100px"}
          height={"100px"}
          alt="logo"
        />
      </nav>
      <div className="flex justify-center items-center w-full ">
        {getCode === "one" ? (
          <div className="flex w-full items-center justify-center px-4">
            <div className="md:w-[60%] md:pl-[70px] py-10">
              <div className="w-full flex flex-col justify-start text-[#971B22] md:text-black">
                <h1 className="font-bold text-2xl">Forgot Password?</h1>
                <p className="text-sm my-6">
                  No problem, enter your email address and we'll send you a
                  link!
                </p>
              </div>
              <div>
                <form
                  className="flex flex-col justify-start text-[#971B22]"
                  method="post"
                  onSubmit={handleSubmit}
                >
                  <input
                    className="h-10 text-md px-3 outline-[#971B22] w-full text-black rounded-2xl border-[1px] border-[#971B22] md:bg-[#e6e7e9] md:border-[#e6e7e9] md:border-2 md:outline-[#B33625] md:px-2 md:mb-4 md:rounded-md md:h-12 md:w-[80%]"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    className="h-10 text-md px-2 w-full rounded-2xl my-5 text-white bg-[#971B22] border-[1px] border-[#971B22] md:h-12 md:w-[80%] md:text-white md:bg-[#B33625] md:rounded-xl"
                    type="submit"
                    value="Reset Password"
                  />
                  <div className="flex gap-1">
                    <p className="text-sm text-black">Remember password? </p>
                    <Link className="text-sm text-[#971B22]" to="/login">
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="hidden md:block md:w-[50%]">
              <ImageCarousel img1={img1} img2={img2} img3={img3} />
            </div>
          </div>
        ) : (
          <div className="flex w-full items-center justify-center px-4 md:px-12">
            <div className="md:w-[50%] text-[#971B22] md:pl-[40px] md:text-black py-10">
              <div className="flex md:w-[80%] flex-col justify-center items-center">
                <h1 className="font-bold text-2xl mb-6">
                  We have just sent you an email with an activation link.
                </h1>
                <img src="images/reset-email.png" alt="Email Icon" />
                <p className="text-sm my-6 text-center">
                  Password reset instructions have been sent to {email}
                </p>
              </div>
              <div>
                <form
                  className="flex flex-col justify-start"
                  action=""
                  method="GET"
                >
                  <Link to="/login">
                    <button className="h-10 text-md px-2 w-full rounded-2xl mt-4 mb-2 md:mb-4 text-white bg-[#971B22] border-2 border-[#971B22] md:border-[#B33625] md:h-12 md:w-[80%] md:text-white md:bg-[#B33625] md:rounded-xl">
                      Back to Login
                    </button>
                  </Link>
                  <div className="flex gap-1">
                    <p className="text-sm">Didn't receive the code? </p>
                    <Link
                      className="text-sm text-[#971B22] md:text-[#B33625] text-opacity-70"
                      onClick={handleSubmit}
                    >
                      Resend
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="hidden md:block md:w-[50%]">
              <ImageCarousel img1={img1} img2={img2} img3={img3} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;
