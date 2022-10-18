import React from 'react'
import Footer from '../Homepage/component/Footer'
import Nav from '../Homepage/component/Nav'
import Coursepage from './Component/Coursepage'

const Courses = () => {
  return (
    <div>
        <Nav />
        <Coursepage />
        <Footer background='black' />
    </div>
  )
}

export default Courses