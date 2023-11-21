import React from 'react'
import {Link} from 'react-router-dom'
import './AboutStyles.css'

const About = () => {
  return (
    <div className='about'>
        <div className='card-container'>
            <div className='card'>
                <h3>Secretary</h3>
                <span className='bar'></span>
                <p className='name'>Divyansh Gangwar</p>
                <Link to='/contact' className='btn'>Contact</Link>
            </div>
            <div className='card'>
                <h3>President</h3>
                <span className='bar'></span>
                <p className='name'>Atreyi Dasgupta</p>
                <Link to='/contact' className='btn'>Contact</Link>
            </div>
            <div className='card'>
                <h3>Treasurer</h3>
                <span className='bar'></span>
                <p className='name'>Neil Gudwala</p>
                <Link to='/contact' className='btn'>Contact</Link>
            </div>
            <div className='card'>
                <h3>Content Lead</h3>
                <span className='bar'></span>
                <p className='name'>Tanishq Kurhade</p>
                <Link to='/contact' className='btn'>Contact</Link>
            </div>
            <div className='card'>
                <h3>Research & Tech Lead</h3>
                <span className='bar'></span>
                <p className='name'>Tanay Garde</p>
                <Link to='/contact' className='btn'>Contact</Link>
            </div>
            <div className='card'>
                <h3>Editorial Lead</h3>
                <span className='bar'></span>
                <p className='name'>Arpan Biswas</p>
                <Link to='/contact' className='btn'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default About
