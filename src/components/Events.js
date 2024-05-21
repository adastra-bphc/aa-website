import React from 'react'
import {Link} from 'react-router-dom'
import './EventsStyles.css'

const Events = () => {
  return (
    <div className='events'>
        <div className='card-container'>
            <div className='card'>
                <span className='bar'></span>
                <p className='name'>Stargazing</p>
                <Link to='/events' className='btn'>More</Link>
            </div>
            <div className='card'>
                <span className='bar'></span>
                <p className='name'>Galactrix</p>
                <Link to='/events' className='btn'>More</Link>
            </div>
            <div className='card'>
                <span className='bar'></span>
                <p className='name'>Astrophotography</p>
                <Link to='/events' className='btn'>More</Link>
            </div>
            <div className='card'>
                <span className='bar'></span>
                <p className='name'>Zathura</p>
                <Link to='/events' className='btn'>More</Link>
            </div>
            <div className='card'>
                <span className='bar'></span>
                <p className='name'>Workshops</p>
                <Link to='/events' className='btn'>More</Link>
            </div>
            <div className='card'>
                <span className='bar'></span>
                <p className='name'>Talks</p>
                <Link to='/events' className='btn'>More</Link>
            </div>
        </div>
    </div>
  )
}

export default Events