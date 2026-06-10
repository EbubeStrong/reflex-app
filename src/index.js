import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style/style.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./Contexts/AuthContext";
import ErrorPage from "./pages/ErrorPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import ResetPassword from "./pages/ResetPassword";
import AccountPreference from "./pages/AccountPreference";
import ServiceProvidersPage from "./pages/ServiceProvidersPage";
import HomePage from "./pages/HomePage";
import ResourcesPage from "./pages/ResourcesPage";
import AllMaps from "./pages/AllMaps";
import AmbulanceMap from "./pages/AmbulanceMap";
import FireService from "./pages/FireService";
import PoliceMap from "./pages/PoliceMap";
import FrscMap from "./pages/FrscMap";
import EmergencyHotlinesPage from "./pages/EmergencyHotlinesPage";
import DomesticViolence from "./pages/DomesticViolence";
import EmergencyContact from "./pages/EmergencyContact";
import SubstanceAbuse from "./pages/SubstanceAbuse";
import ConfirmReset from "./pages/ConfirmReset";
import EmergencyContactsForm from "./components/EmergencyContactsForm";
import Web3registration from "./components/web3registration";
import EmergencyContacts from "./pages/EmergencyContacts";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import FirstAid from "./pages/FirstAid";
import FireSafety from "./pages/FireSafety";
import RoadAndDriverSafety from "./pages/RoadAndDriverSafety";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test",
    element: <App />,
  },

  {
    path: "/resources",
    element: <ResourcesPage />,
  },
  {
    path: "/login",
    element: <SigninPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword />,
  },
  {
    path: "/resetpassword/:token",
    element: <ConfirmReset />,
  },
  {
    path: "/userprofile",
    element: <AccountPreference />,
  },
  {
    path: "/tracking",
    element: <AllMaps />,
  },

  {
    path: "/serviceproviders",
    element: <ServiceProvidersPage />,
  },
  {
    path: "/emergencyhotlines",
    element: <EmergencyHotlinesPage />,
  },
  {
    path: "/hospitals",
    element: <AmbulanceMap />,
  },
  {
    path: "/firestations",
    element: <FireService />,
  },
  {
    path: "/policestations",
    element: <PoliceMap />,
  },
  {
    path: "/frsc",
    element: <FrscMap />,
  },
  {
    path: "/domestic-violence",
    element: <DomesticViolence />,
  },
  {
    path: "/emergency-contact",
    element: <EmergencyContact />,
  },
  {
    path: "/emergencycontacts",
    element: <EmergencyContacts />,
  },
  {
    path: "/substance-abuse",
    element: <SubstanceAbuse />,
  },
  {
    path: "/firstaid",
    element: <FirstAid />,
  },
  {
    path: "/firesafety",
    element: <FireSafety />,
  },
  {
    path: "/roadsafetytips",
    element: <RoadAndDriverSafety />,
  },
  {
    path: "/contactform",
    element: <EmergencyContactsForm />,
  },
  {
    path: "/wallet",
    element: <Web3registration />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
