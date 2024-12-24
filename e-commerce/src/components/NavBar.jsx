import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <header className='header'>
        <nav className='navBar'>
            <NavLink to='/home' style='' >Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/vapes'>Vapes</NavLink>
        </nav>

        <h1 className='brandName'>VaporMax</h1>

        <CartWidget />

    </header>
  )
}

export default NavBar
