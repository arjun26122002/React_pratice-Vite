import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from './Navbar'

const Header = () => {
  return (
    <header className ="container mx-auto flex flex-wrap p-5 flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4">
        <NavLink to='/'>
          <h1>Arjun Dey</h1>
        </NavLink>
        </a>
      <div className = "flex flex-wrap items-center text-base justify-center">
        <NavBar />
      </div>
    </header>
  )
}

export default Header