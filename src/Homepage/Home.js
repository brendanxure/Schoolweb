import React from 'react'
import Categories from './component/Categories'
import Courses from './component/Courses'
import FAQ from './component/FAQ'
import Footer from './component/Footer'
import Header from './component/Header'
import Nav from './component/Nav'
import Testimonial from './component/Testimonial'

const Home = ({background}) => {
    
  return (
    <div className='Home'>
        <Nav />
        <Header />
        <Categories />
        <Courses />
        <FAQ />
        <Testimonial />
        <Footer background='Footercont'/>
    </div>
  )
}

export default Home