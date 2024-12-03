import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header className='header'>
        <nav className='navBar'>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Products</a>
            <a href="/">Contact</a>
        </nav>

        <h1 className='brandName'>VaporMax</h1>

        <CartWidget />

    </header>
  )
}

export default NavBar
