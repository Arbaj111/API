import React from 'react'
import {  NavLink } from 'react-router'

function Header() {
  return (
    <div className='flex'>
     <div className='mx-auto'>Logo</div>
     <div className='mx-auto'>
     <ul className='flex '>
        <li className=''>
            <NavLink 
            to=""
            className='mx-4'>
                Home
            </NavLink>
        </li>

        <li className=''>
            <NavLink 
            to="About"
            className='mx-4'>
                About
            </NavLink>
        </li>

        
      </ul>
     </div>
    </div>
  )
}

export { Header }