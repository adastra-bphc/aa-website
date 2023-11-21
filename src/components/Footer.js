import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaMailBulk} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='email'>
                    <h4>
                    "Equipped with his five senses, man explores the universe around him and calls the adventure Science." -Edwin Powell Hubble
                    </h4>
                </div>
            </div>
            <div className='right'>
                <div className='social'>
                    <h3>Follow Us</h3> 
                    <br/>
                    <FaFacebook size={30} style = {{color: '#ffffff', marginRight: '1rem'}}/>
                    <FaInstagram size={30} style = {{color: '#ffffff', marginRight: '1rem'}}/>
                    <FaLinkedin size={30} style = {{color: '#ffffff', marginRight: '1rem'}}/>
                    <FaMailBulk size={30} style = {{color: '#ffffff', marginRight: '1rem'}}/>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Footer
