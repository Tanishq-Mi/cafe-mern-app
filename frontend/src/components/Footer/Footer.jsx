import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'> 
    <div className="footer-container">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione a mollitia est dolor natus pariatur nemo deleniti nulla ipsa totam assumenda, fugit fugiat illum magnam ea, iure nostrum deserunt sit!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>+91 9450164619</li>
                <li>rajdm1218@gmail.com</li>
            </ul>

        </div>
    </div>
      <hr />
      <p className="footer-copyright">
      © 2025 Cake&Cookie Cafe. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
