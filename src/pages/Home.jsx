import React from 'react'
import Footer from '../components/Footer'
import AdvancedCarousel from '../components/Carasoul'
import About from '../components/HomeAbout'
import Navbar from '../components/Navbar';
import Timeline from '../components/Timeline';
import AppreciationLetters from '../components/Appearentship';
import Clients from './Clients';
import Services from '../components/Features';
import ServicesComponent from '../components/ServiceComponent';
import ISOServicesComponent from '../components/TableComponent';
import QMSComponent from '../components/AboutComponent2';
import AboutUs from '../components/ImageTop';
import QMSApproach from '../components/AboutComponent3';
import VisionSection from '../components/VisionComponent';
import TestimonialsSection from '../components/TestimonialsComponent';
import ImageGallery from '../components/ImageGallery';
import ContactForm from '../components/ContactUsComponent';
import { Contact } from 'lucide-react';
import MapComponent from '../components/Map';
import AlNoorBlog from '../components/HomeBlog';
import BusinessAssociates from '../components/BusinessAssociates';
import Whatsapp from '../components/Whatsapp'


const CarouselItems = [
  {
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', 
    title: 'City Skyline'
  },
  {
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', 
    title: 'Mountain Landscape'
  },
  {
    image: 'https://images.unsplash.com/photo-1523301343968-6a6f7e6e56c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', 
    title: 'Modern Architecture'
  },
  {
    image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', 
    title: 'Night Sky'
  },
  {
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', 
    title: 'Forest Pathway'
  },
  {
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', 
    title: 'Beach Sunset'
  }
  // Add more items as needed
];



const Home = () => {
  return (
    <div className='text-black font-bold'>
       {/* <Navbar/> */}
       <AdvancedCarousel items={CarouselItems} />

       {/* <About/>
       <ServicesComponent/>
       {/* <Services/> */}
       {/* <Clients/>   */}
       {/* <ISOServicesComponent/> */}
       {/* <QMSComponent/>
       <QMSApproach/>  */}
       {/* <TestimonialsSection/>
       <AlNoorBlog/>
       <BusinessAssociates/>
       <Footer/>
       <Whatsapp/> */} 
       {/* <AboutUs/> */}
       {/* <VisionSection/> */}
       {/* <TestimonialsSection/> */}
       {/* <ImageGallery/> */}
       {/* <ContactForm/> */}
       {/* <MapComponent/> */}
    </div>
  )
}

export default Home
