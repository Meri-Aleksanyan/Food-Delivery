import React from 'react'
//import images
import delivery_drone from './../../images/delivery_drone.png'
//import sections
import './Section2.css'

const Section2 = () => {
  return (
    <div>
        <section className='section2'>
            <div className='image'>
                <h1>Key Advantages of Drone Delivery</h1>
                <img src={delivery_drone} alt="" />
            </div>
            <div className='supper'>
                <div className='container'>
                    <div className='card'>
                        <div className='card-inner'>
                            <div className='card-front'>
                                <h2>Fast Delivery</h2>
                            </div>
                            <div className='card-back'>
                                <p>Our drones deliver your packages quickly and efficiently, reducing delivery times significantly.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <div className='card-front'>
                                <h2>Safe and Reliable</h2>
                            </div>
                            <div className='card-back'>
                                <p>Equipped with advanced technology, our drones ensure that your packages are delivered safely and securely.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='card'>
                        <div className='card-inner'>
                            <div className='card-front'>
                                <h2>Real-Time Tracking</h2>
                            </div>
                            <div className='card-back'>
                                <p>Track your delivery in real-time through our user-friendly app for full transparency and peace of mind.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <div className='card-front'>
                                <h2>Eco-Friendly</h2>
                            </div>
                            <div className='card-back'>
                                <p>Our drones offer an eco-friendly alternative to traditional delivery methods, reducing carbon emissions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Section2