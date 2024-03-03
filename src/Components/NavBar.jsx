import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = ({handleLogOut}) => {
  return (
    <div
      className="bg-white menubar"
    >
      <div className="menu">
        <NavLink
          className="text-decoration-none link carbon-black"
          to="/house"
        >
          House
        </NavLink>
        <NavLink
          className="text-decoration-none link carbon-black"
          to="/transport"
        >
          Transport
        </NavLink>
        <NavLink
          className="text-decoration-none link carbon-black"
          to="/lifestyle"
        >
          Lifestyle
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar