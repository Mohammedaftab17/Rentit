
import Hero from '@/components/Hero'
import Homeproperties from '@/components/Homeproperties'
import Infoboxes from '@/components/Infoboxes'
import React from 'react'
import connectDB from '@/config/database'

const Homepage = async () => {
 await connectDB()
  return (
    <>
      <Hero/>
      <Infoboxes/>
      <Homeproperties/>
    </>
  )
}

export default Homepage
