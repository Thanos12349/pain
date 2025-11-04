import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Welcome from '../components/Welcome'
import Service from '../components/Services'
import SpecialistServices from '../components/SpecialistServices'
import ImageSlider from '../components/ImageSlider'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <Welcome />
    <Service />
    {/* <SpecialistServices /> */}
    <ImageSlider />
    <Testimonials />
    <Footer />

    </>
  )
}

export default Home
