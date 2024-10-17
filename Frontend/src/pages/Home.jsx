import React from 'react'
import GardenShop from '../components/GardenShop'
import Hero from '../components/Hero'
import ProductSection from '../components/ProductSection'
import TerraceGardenPlan from '../components/TerraceGardenPlan'

function Home() {
  return (
    <div>
      <Hero />
      <GardenShop />
      <TerraceGardenPlan />
      <ProductSection />
    </div>
  )
}

export default Home
