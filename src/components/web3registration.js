import { useState } from "react";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { contractAbi, contractAddress } from "../Contract/constant";

console.log(contractAbi, contractAddress);

function Web3registration() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [error, setError] = useState(null);
  const history = useNavigate();
  const { setIsVerified } = useAuth();

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setProvider(provider);
        setSigner(signer);
        setWalletAddress(address);
      } catch (error) {
        if (error.code === 4001) {
          setError("User rejected the request to connect with your wallet");
        } else {
          setError("Something went wrong!");
        }
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  const registerUser = async () => {
    if (signer) {
      const UserRegistrationContract = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer
      );
      try {
        const isRegistered = await UserRegistrationContract.registeredUsers(
          walletAddress
        );
        if (isRegistered) {
          setError("You already registered");
          setIsVerified(true);
          history("/");
          return;
        }

        const tx = await UserRegistrationContract.register();
        await tx.wait();
        setError("");
        setIsRegistered(true);
        console.log("User registered:", tx);
        history("/");
      } catch (error) {
        if (error.code === 4001) {
          setError("You failed to register, try again");
        } else {
          setError("You failed to register, try again");
        }
        console.error("Error registering user:", error);
      }
    } else {
      alert("Please connect your wallet first!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <header className="flex flex-col items-center justify-center w-full h-full bg-mobile-bg md:bg-desktop-bg bg-cover bg-center">
        <h1 className="px-4 py-2">
          To verify yourself, you need to have a Metamask wallet
        </h1>
        {!signer ? (
          <button
            className="text-white bg-red-800 m-6 px-4 py-2 rounded-3xl hover:bg-white hover:text-[#971B22] transition duration-300"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        ) : (
          <button
            className="text-white bg-red-800 m-6 px-4 py-2 rounded-3xl hover:bg-white hover:text-[#971B22] transition duration-300"
            onClick={registerUser}
          >
            Register
          </button>
        )}
        {walletAddress && (
          <p className="mx-6">Connected Wallet Address: {walletAddress}</p>
        )}
        {isRegistered && <p className="mx-6">User successfully registered!</p>}
        {error && (
          <p className="mx-6" style={{ color: "red" }}>
            {" "}
            {error}
          </p>
        )}
      </header>
    </div>
  );
}

export default Web3registration;
