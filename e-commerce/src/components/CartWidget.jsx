import React from 'react'
import './NavBar.css'

const CartWidget = () => {
    return (
        <>
            <div className="container-icon">
                <svg className='CartWidget' viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                        <rect fill="none" height="256" width="256" />
                        <circle cx="80" cy="216" r="16" />
                        <circle cx="184" cy="216" r="16" />
                        <path 
                        d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" 
                        fill="none" 
                        stroke="#000" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="16" 
                        />
                </svg>


                <div className='count-products'>
                    <span id='contador-productos'>0</span>
                </div>
            </div>

        </>
    )
}

export default CartWidget