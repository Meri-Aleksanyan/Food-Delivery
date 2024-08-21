import React from 'react'
import './Footer.css'

//icons
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <footer>
            <div className='footer_title'>
              <h1>Food Delivery</h1>
              <p>  Copyright: &copy;Food Delivery </p>
            </div>
            <div className='col2'> 
              <div className='tags'>
                <p>Blog</p>
                <p>Events</p>
              </div>
              <div className='tags'>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
              </div>
            </div>
            <div className='icons'>
              <div><FaInstagram /></div>
              <div><FaFacebookF /></div>
              <div><FaTiktok /></div>
              <div><FaTelegramPlane /></div>
            </div>
        </footer>
    </div>
  )
}

export default Footer