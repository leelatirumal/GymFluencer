import React from 'react';
import './Footer.css';
import {FaFacebookF, FaTwitter,FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
      <h3 style={{color:'orange'}}><span style={{backgroundColor:'white',color:'grey'}}> GYM</span> Fluencer</h3>
        <p>
          At Gym Fluencer, we make group workouts fun, daily food healthy & tasty, mental
          fitness easy with yoga & meditation. Medical & lifestyle care hassle-free.
          #BeBetterEveryDay
        </p>
      </div>
      

      <div className="footer-right">
        <div className="footer-section">
          <h4>  Business</h4>
          <h4>  Franchise</h4>
          <h4>Corporate partnerships</h4>
          <h4> pass network</h4>
          <h4>T&C for business</h4>
        </div>

        <div className="footer-section">
          <h4>Partner.fit</h4>
          <h4>Blogs</h4>
          <h4>Security</h4>
          <h4>Careers</h4>
          <h4>Terms & Conditions</h4>
        </div>

        <div className="footer-section">
          <h4>Contact us</h4>
          <h4>Privacy Policy</h4>
          <h4>Bmi Calculator</h4>
          <h4>Careers</h4>
          <h4>Xin</h4>
        </div>

        <div className="footer-section">
        <a href="#" className="play-store"> 
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeNXpjnrGgiWcKjb5LV116jTOlsoao6uuLzerdF8lo5z1MKur2ePwFjS7w8YzZYTeUVg&usqp=CAU" alt="Google Play" /> 
        </a>
        <br/>
          <a href="#" className="play-store">
            <img src="https://static.vecteezy.com/system/resources/previews/024/170/871/non_2x/badge-google-play-and-app-store-button-download-free-png.png" alt="Google Play" />
          </a>
          <div className="social-media">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
             <a href="#"><FaLinkedinIn /> </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;