import React from "react";
import AboutUs from "../components/AboutUs";
import AppointmentScheduler from "../components/AppointmentScheduler";
import ContactUs from "../components/ContactUs";
import FeaturesSection from "../components/FeaturesSection";
import GardenShop from "../components/GardenShop";
import Hero from "../components/Hero";
import MaintenancePlan from "../components/MaintenancePlan ";
import MarqueeComponent from "../components/MarqueeComponent";
import ProductSection from "../components/ProductSection";
import Sidebar from "../components/Sidebar";
import TerraceGardenPlan from "../components/TerraceGardenPlan";
import Whychooseus from "../components/Whychooseus";

function Home() {
  return (
    <div>
      <Sidebar />
      <Hero />
      <Whychooseus />
      <GardenShop />
      <TerraceGardenPlan />
      <ProductSection />
      <AppointmentScheduler />
      <MaintenancePlan />
      <AboutUs />
      {/* <MarqueeComponent /> */}
      <ContactUs />
      <FeaturesSection />
    </div>
  );
}

export default Home;
