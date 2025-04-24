import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../data'
import "./navbar.css"

export default function Navbar() {
  const [showmenu, setshowmenu] = useState(false)
  return (
    <nav className='nav'>
      <div className={`${showmenu ? 'nav_menu show-menu' : "nav_menu"}`}>
        <ul className="nav_list">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className="nav_item" key={index}>
                <NavLink to={path} className={({ isActive }) => isActive ? "nav_link active-nav " : "nav_link "} onClick={() => setshowmenu(!showmenu)}>
                  {icon}
                  <h3 className='nav_name'>{name}</h3>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={`${showmenu ? 'nav_toggle animated-toggle' : "nav_toggle"}`} onClick={() => setshowmenu(!showmenu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}
