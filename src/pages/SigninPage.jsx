import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import ImageCarousel from "../components/ImageCarousel";
import { useAuth } from "../Contexts/AuthContext";

function SigninPage() {
  const img1 = "images/signin-1.png";
  const img2 = "images/signin-2.png";
  const img3 = "images/signin-3.png";
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://rxe-lphv.onrender.com/auth/login",
        {
          email: email,
          password: password,
        }
        // response.data.user.name
      );
      console.log("Login Successful:", response.data);
      setIsLoggedIn(true);
      history("/");
      const name = response.data.data.user.name;
      localStorage.setItem("userName", name);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="bg-mobile-bg md:bg-desktop-bg h-screen bg:cover md:bg-contain bg-center">
      <div className="md:hidden relative flex flex-col justify-center items-center p-4 pt-10 h-[100vh] text-[#971B22] py-6 bg-mobile-bg">
        <div className="flex flex-col justify-center items-center relative top-4">
          <h2 className="text-2xl font-bold mt-4 mb-1">Welcome back</h2>
          <p className="text-md my-2">Sign in to continue</p>
        </div>

        <form className="relative top-10" onSubmit={handleSubmit}>
          <label className="my-1 text-md font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="h-10 text-md px-3 mb-3 outline-[#971B22] w-full text-black rounded-2xl border-[1px] border-[#971B22]"
            type="email"
            id="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="my-1 mt-2 text-md font-semibold" htmlFor="password">
            Password
          </label>
          <div className="relative flex">
            <input
              className="h-10 text-md px-3 outline-[#971B22] w-full text-black rounded-2xl border-[1px] border-[#971B22]"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="text-[#971B22] absolute right-5 top-3"
              type="button"
              onClick={handleTogglePassword}
            >
              {showPassword ? <FaRegEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div className="flex mt-2 items-end justify-end">
            <Link
              className="text-sm items-end text-[#971B22] hover:text-gray-500"
              to="/resetpassword"
            >
              Forgotten password?
            </Link>
          </div>

          <button
            className="h-10 text-md text-white px-2 w-full rounded-2xl mt-20 mb-2 bg-[#971B22] border-1 border-[#971B22]"
            type="submit"
          >
            Sign In
          </button>

          <div className="flex flex-row justify-center items-center gap-2 mt-4">
            <p>Don't have an account? </p>
            <Link
              className="text-sm text-red-500 hover:text-[#971B22] text-opacity-80"
              to="/signup"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block relative md:w-screen md:h-[85vh] px-10">
        <img
          className="mx-12 my-4"
          src="/images/logo.png"
          width={"100px"}
          height={"100px"}
          alt="logo"
        />
        <div className="flex flex-row justify-center items-center px-10 ">
          <form
            className="flex flex-col w-[50%] pl-4 justify-center items-start"
            onSubmit={handleSubmit}
          >
            <h1 className="font-bold text-2xl">Login to your account</h1>
            <p className="font-medium text-lg mb-8">Welcome back</p>

            <label className="font-medium text-md" htmlFor="email">
              Email
            </label>
            <input
              className="bg-[#e6e7e9] border-[#e6e7e9] border-2 outline-[#B33625] px-2 mb-4 rounded-md h-12 w-[80%]"
              type="text"
              name="email"
              id="email"
              placeholder="youremail@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="font-medium text-md" htmlFor="password">
              Password
            </label>
            <div className="flex w-[80%] relative mb-1">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="* * * * * * * *"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#e6e7e9] border-[#e6e7e9] border-2 outline-[#B33625] px-2 mb-4 rounded-md h-12 w-full"
              />
              <span
                className="absolute text-[#B33625] text-xl right-0 top-3 flex items-center pr-3 cursor-pointer"
                onClick={handleTogglePassword}
              >
                {showPassword ? <FaRegEye /> : <FaEyeSlash />}
              </span>
            </div>
            <button
              className="h-12 w-[80%] text-white bg-[#B33625] rounded-xl"
              type="submit"
            >
              Login
            </button>
            <Link
              className="h-12 w-[80%] text-[#B33625] bg-white rounded-xl border-[1px] border-[#B33625] text-center flex justify-center items-center mt-6"
              to="/resetpassword"
            >
              Forgot Password
            </Link>
          </form>
          <div className="w-[50%] h-[600px]">
            <ImageCarousel img1={img1} img2={img2} img3={img3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
