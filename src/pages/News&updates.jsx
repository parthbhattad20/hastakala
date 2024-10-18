import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutUs from '../components/ImageTop'
import news1 from '../assets/news/news1.jpeg'
import news2 from '../assets/news/news2.jpg'

const NewsUpdates = () => {
  return (
    <div>
    <Navbar/>
    <AboutUs title="News & Updates" route="Alnoor > News & Updates"/>
      <div className='flex justify-center'>
        <img src={news1} className='h-full w-[300px] my-2' alt="news image 1" />
      </div>
      <div className='flex justify-center'>
      <img src={news2} className='h-full w-[300px] my-2' alt="news image 2" />
      </div>
      <div className='h-[300px] mt-10 mb-2'>
    <h1 className='text-center text-2xl text-blue-300'>ISO 27001:2022 ISMS Lead Implementer Training in Kuwait</h1>
    <h1 className='text-center text-2xl text-blue-300 '>Information Security, Cybersecurity, Privacy Protection Information Security</h1>
    <p className='text-center text-xl mx-20 mt-5'>The training program is designed to give participants an understanding of ISO/IEC 27001:2022 requirements while incorporating case studies, exercises, and role playing. Participants will leave the program with the knowledge and abilities required to implement an organization’s Information Security Management System (ISMS). Register Now 5162 3202/5167 8907/ 9786 0595 info@alnoor-consultants.com https://forms.gle/P58QSF1wy9ZKuvat9</p>
      </div>
      <Footer/>
    </div>
  )
}

export default NewsUpdates
