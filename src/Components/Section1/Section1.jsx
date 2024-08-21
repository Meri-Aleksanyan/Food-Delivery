import React from 'react'
import back from './../../videos/back.mp4'
import './Section1.css'

const Section1 = () => {
  return (
    <div>
        <section className='section1'>
            <video autoPlay loop muted id='video'>
                <source src={back} type='video/mp4'/>
            </video>
            <div className='overlay-text'>
                <h1>Welcome to our innovative drone delivery service</h1>
                <p>
                    here cutting-edge technology meets convenience. Our drones are designed to deliver your packages quickly and safely, ensuring that your items arrive at your doorstep in record time. With real-time tracking and a user-friendly app, you can stay updated on your delivery every step of the way.
                </p>
            </div>
        </section>

    </div>
  )
}

export default Section1