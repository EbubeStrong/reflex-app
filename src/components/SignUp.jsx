import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ImMail4 } from "react-icons/im";
import { FaEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import axios from "axios";
import ImageCarousel from "./ImageCarousel";

function SignUp() {
  const img1 = "images/signup-1.png";
  const img2 = "images/signup-2.png";
  const img3 = "images/signup-3.png";
  const history = useNavigate();

  const [render, setRender] = useState("one");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const validatePassword = (input) => {
    const hasUpperCase = /[A-Z]/.test(input);
    const hasLowerCase = /[a-z]/.test(input);
    const hasNumber = /\d/.test(input);
    return hasUpperCase && hasLowerCase && hasNumber;
  };

  const createUser = async (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      alert(
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      );
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }
    try {
      const response = await axios.post(
        "https://rxe-lphv.onrender.com/auth/signup",
        {
          name: name,
          email: email,
          password: password,
        }
      );
      console.log("Created Successfully:", response.data);
      history("/login");
    } catch (error) {
      console.error("Failed to create user:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="md:hidden">
        {render === "one" ? (
          <div className="relative px-4 h-[90vh]">
            <p className="py-4 text-2xl text-[#971B22] font-bold relative right-[350px] top-10">
              Sign Up
            </p>
            <div className="flex flex-col items-center justify-center relative top-12">
              <img src="/images/logo.png" alt="logo" />
              <button className="flex justify-center items-center gap-2 bg-[#8C8C8C] text-white font-bold py-2 px-4 rounded-3xl w-full h-12 mt-8">
                <FaFacebook className="h-8 w-8" />
                <span className="text-md font-light">
                  Sign in with Facebook
                </span>
              </button>
              <button className="flex justify-center items-center gap-2 bg-[#8C8C8C] text-white font-bold py-2 px-4 rounded-3xl w-full h-12 mt-8">
                <FcGoogle className="h-8 w-8" />
                <span className="text-md font-light">Sign in with Google</span>
              </button>
              <p className="mt-4 text-[#971B22] text-md">
                or sign in via email
              </p>
              <button
                className="flex justify-center items-center gap-2 bg-[#8C8C8C] text-white font-bold py-2 px-4 rounded-3xl w-full h-12 mt-8"
                onClick={() => setRender("three")}
              >
                <ImMail4 className="h-8 w-8" />
                <span className="text-md font-light">Sign up with Email</span>
              </button>
              <p className="mt-4 text-sm text-[#971B22] text-center">
                By joining, you agree to Reflex's{" "}
                <Link to="">Terms of Service</Link>
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-4 h-[100vh]">
            <h1 className="py-4 text-2xl mb-4 text-[#971B22] font-semibold">
              Sign up with Email
            </h1>
            <form onSubmit={createUser} className="flex flex-col w-full">
              <label
                className="text-black text-md font-semibold"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="h-10 text-md px-3 my-2 mb-4 outline-[#971B22] w-full text-black rounded-2xl border-[1px] border-[#971B22]"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label
                className="text-black text-md font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="h-10 text-md px-3 my-2 mb-4 outline-[#971B22] w-full text-black rounded-2xl border-[1px] border-[#971B22]"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                className="text-black text-md font-semibold"
                htmlFor="password"
              >
                Password
              </label>
              <div className="flex w-full relative mb-1">
                <input
                  className="h-10 text-md px-3 my-2 outline-[#971B22] w-full text-black rounded-2xl border-[1px] border-[#971B22]"
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="absolute text-[#971B22] text-xl right-0 top-4 flex items-center pr-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                </span>
              </div>
              <p className="text-sm text-[#971B22] mb-4">
                Combine upper and lowercase letters and numbers.
              </p>

              <button
                type="submit"
                className="bg-[#971B22] text-white font-bold py-2 mt-16 px-4 rounded-3xl w-full mb-4"
              >
                Sign Up
              </button>
              <p className="text-[#971B22] text-center">
                By joining, you agree to Reflex's{" "}
                <Link
                  className="text-sm mb-4 text-red-500 w-full text-end opacity-70"
                  to=""
                >
                  Terms of Service
                </Link>
              </p>
            </form>
          </div>
        )}
      </div>

      {/* Desktop view */}
      <div className="hidden relative md:w-screen md:h-[85vh] md:flex md:flex-row justify-center items-center md:px-10">
        <form
          className="flex flex-col w-[50%] pl-4 justify-center items-start"
          onSubmit={createUser}
        >
          <h1 className="font-bold text-2xl">Create an account</h1>
          <p className="font-medium text-lg mb-8">Let's set you all up</p>
          <label className="font-medium text-md" htmlFor="name">
            Name:
          </label>
          <input
            className="bg-[#e6e7e9] border-[#e6e7e9] border-2 outline-[#B33625] px-2 mb-4 rounded-md h-12 w-[80%]"
            type="text"
            name="name"
            id="name"
            placeholder="Nahzarh Okafor"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label className="font-medium text-md" htmlFor="email">
            Email:
          </label>
          <input
            className="bg-[#e6e7e9] border-[#e6e7e9] border-2 outline-[#B33625] px-2 mb-4 rounded-md h-12 w-[80%]"
            type="text"
            name="email"
            id="email"
            placeholder="youremail@gmail.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="font-medium text-md" htmlFor="password">
            Password:
          </label>
          <div className="flex w-[80%] relative mb-1">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="* * * * * * * *"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#e6e7e9] border-[#e6e7e9] border-2 outline-[#B33625] px-2 mb-4 rounded-md h-12 w-full"
            />
            <span
              className="absolute text-[#B33625] text-xl right-0 top-3 flex items-center pr-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaRegEye /> : <FaEyeSlash />}
            </span>
          </div>
          <p className="font-medium text-xs mb-4 w-[80%] text-center">
            By signing up, you agree to the{" "}
            <Link className="text-red-500" to="#">
              Terms and Conditions
            </Link>{" "}
            and the{" "}
            <Link className="text-red-500" to="#">
              Privacy Policy
            </Link>{" "}
            of RefleX.
          </p>
          <button
            className="h-12 w-[80%] text-white bg-[#B33625] rounded-xl"
            type="submit"
          >
            Create an account
          </button>
          <div className="flex items-center gap-2 w-[80%]">
            <p className="font-medium text-sm my-4 text-start">
              Already have an account?
            </p>{" "}
            <Link className="text-red-500 font-medium text-sm" to="/login">
              Log in
            </Link>
          </div>
        </form>
        <div className="w-[50%] h-[600px]">
          <ImageCarousel img1={img1} img2={img2} img3={img3} />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
