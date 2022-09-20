import React from 'react'
import {ImFacebook} from 'react-icons/im'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = ({background}) => {
    
  return (
    <div className={background}>
        <div className='Footerhome' id='Footer'>
            <section className='bxfoot'>
                <h3>BRENDAN XURE</h3>
            </section>
            <section>
                <h3>Permalinks</h3>
                <ul>
                    <ol><a>Home</a></ol>
                    <ol><a>About</a></ol>
                    <ol><a>Courses</a></ol>
                    <ol><a>Contact</a></ol>
                </ul>
            </section>
            <section>
                <h3>Primacy</h3>
                <ul>
                    <ol><a>Privacy Policy</a></ol>
                    <ol><a>Terms and conditions</a></ol>
                    <ol><a>Refund Policy</a></ol>
                </ul>
            </section>
            <section>
                <h3>Contact Us</h3>
                <ul>
                    <ol><a>+234 814 678 9880</a></ol>
                    <ol><a>Brendanxure@outlook.com</a></ol>
                </ul>
                <main className='Footericons'>
                    <span><ImFacebook /></span>
                    <span><FaInstagramSquare /></span>
                    <span><BsTwitter /></span>
                    <span><FaLinkedinIn /></span>
                </main>
            </section>
        </div>
    </div>
  )
}

export default Footer