import React from 'react'
import Categories from './component/Categories'
import Courses from './component/Courses'
import FAQ from './component/FAQ'
import Footer from './component/Footer'
import Header from './component/Header'
import Nav from './component/Nav'
import Testimonial from './component/Testimonial'

const Home = () => {
  return (
    <div>
        <Nav />
        <Header />
        <Categories />
        <Courses />
        <FAQ />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Home