import React from 'react'
import Footer from '../Homepage/component/Footer'
import Nav from '../Homepage/component/Nav'
import Achievement from './Components/Achievement'
import Team from './Components/Team'

const About = () => {
  return (
    <div className='About' id='#'>
        <Nav />
        <Achievement />
        <Team />
        <Footer background='black'/>
    </div>
  )
}

export default About