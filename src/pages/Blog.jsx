import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutUs from '../components/ImageTop'
import Whitespace from '../components/Whitespace'

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <AboutUs title="Blogs" route="Alnoor > Blogs"/>
      <Whitespace/>
      <Footer/>
    </div>
  )
}

export default Blog
