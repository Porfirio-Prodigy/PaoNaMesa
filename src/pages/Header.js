import React from 'react'
import Logo from '../assets/icons/Logo.png';

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <Link to="/">
        <img src={Logo} alt="logo" width={220} height={220}/>
      </Link>
    </header>
  )
}

export default Header