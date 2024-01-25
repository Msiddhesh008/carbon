import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = ({handleLogOut}) => {
  return (
    <div
      style={{
        transform: "translateY(30px)",
        zIndex: 2,
      }}
      className="bg-white w-75 p-4 m-auto d-flex justify-content-center"
    >
      <div className="w-75  d-flex justify-content-between">
        <NavLink
          className="text-decoration-none link carbon-black ps-3 pt-2 pb-2 pe-3"
          to="/house"
        >
          House
        </NavLink>
        <NavLink
          className="text-decoration-none link carbon-black ps-3 pe-3 pt-2 pb-2"
          to="/transport"
        >
          Transport
        </NavLink>
        <Link
          className="text-decoration-none link carbon-black ps-3 pe-3 pt-2 pb-2"
          to=""
        >
          Lifestyle
        </Link>
        <Link
          className="text-decoration-none link carbon-black ps-3 pe-3 pt-2 pb-2"
          to=""
        >
          Contact
        </Link>
        <button
          onClick={handleLogOut}
          className="btn  carbon-blue fw-bold ps-3 pe-3 pt-2 pb-2 "
          to=""
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default NavBar