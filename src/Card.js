import React from 'react'
import './Card.css'
import imgHero from './assets/illustration-hero.svg'
import imgMusic from './assets/icon-music.svg';

function Card() {
  return (
    <div className='hero-card'>
        <div className='card-img'>
             <img src = {imgHero} style={{height : '100%' , width : '100%'}}/>
        </div>
        <div className='card-content'>
            <h2>Order Summary</h2>
            <p>You can noe listen to millions of songs, audiobooks, and podcats on any device anywhere you like!</p>
            <div className='plan'>
                <div className='plan-inner'>
                  <img src = {imgMusic} style={{height : '35px' , width : '35px'}}/>
                  <h4>Annual Plan<br/>
                  $59.99/year</h4>
                </div> 
                <h5>Change</h5>
            </div>
            <button className='button1'>Proceed to Payment</button>
            <h3>Cancel Order</h3>
        </div>
    </div>
  )
}

export default Card