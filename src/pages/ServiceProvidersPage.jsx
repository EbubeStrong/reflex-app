import React from "react";
import ServiceProviders from "../components/ServiceProviders";
import NavBar from "../components/NavBar";

function ServiceProvidersPage() {
  return (
    <div className="relative bg-mobile-bg md:bg-desktop-bg bg-cover bg-center w-screen h-screen hidden md:block">
      <nav className="hidden md:block">
        <NavBar />
      </nav>
      <ServiceProviders />
    </div>
  );
}

export default ServiceProvidersPage;
