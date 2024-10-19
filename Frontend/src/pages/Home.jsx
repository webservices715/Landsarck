import React from 'react'
import AboutUs from '../components/AboutUs'
import AppointmentScheduler from '../components/AppointmentScheduler'
import ContactUs from '../components/ContactUs'
import GardenShop from '../components/GardenShop'
import Hero from '../components/Hero'
import MaintenancePlan from '../components/MaintenancePlan '
import MarqueeComponent from '../components/MarqueeComponent'
import ProductSection from '../components/ProductSection'
import TerraceGardenPlan from '../components/TerraceGardenPlan'
import Whychooseus from '../components/Whychooseus'

function Home() {
  return (
    <div>
      <Hero />
      <Whychooseus />
      <GardenShop />
      <TerraceGardenPlan />
      <ProductSection />
      <AppointmentScheduler />
      <MaintenancePlan />
      <AboutUs />
      <MarqueeComponent />
      <ContactUs />
    </div>
  )
}

export default Home
