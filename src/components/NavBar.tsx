import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function NavBar() {
  return (
    <nav className='z-10 relative px-8 py-4 flex justify-between'>
            <img className='w-24' src={logo} alt="" />
            <ul className='flex gap-20'>
                <li className='text-white cursor-pointer'>
                  <Link to='/'>HOME</Link>
                </li>
                <li className='text-white cursor-pointer'>NOSSA PLATAFORMA</li>
                <li className='text-white cursor-pointer'>SOBRE NÓS</li>
                <li className='text-white cursor-pointer'>
                  <Link to='/contato'>CONTATO</Link>
                </li>
            </ul>
        </nav>
  )
}
