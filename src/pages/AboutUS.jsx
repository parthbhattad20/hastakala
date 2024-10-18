import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AppreciationLetters from '../components/Appearentship'
import VisionSection from '../components/VisionComponent'
import LeadershipTeam from '../components/TeamComponent'
import About from '../components/HomeAbout'
import AssociatePartners from '../components/AssociatePartners'
import ContactForm from '../components/ContactFormAboutus'
import AboutUs from '../components/ImageTop'

const AboutUS = () => {
  return (
    <div>
      <Navbar/>
      <AboutUs title="Why Us" route="Alnoor > Why Us"/>
      <VisionSection/>
      <About/>
      <LeadershipTeam/>
      <AssociatePartners/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default AboutUS
