import React from 'react'
import { Link } from "react-router-dom";

/* Images */
import Register from '../assets/icons/Register.png';
import Donate from '../assets/icons/Donate.png';

const Home = () => {
  return (
    <div className='action-links'>
        <nav className='action_nav_link'>
          <ul className='action_listing_link'>
            <li className='action_list_link'>
                <Link to="/register" className='action_link'>
                    <img src={Register} alt="Cadastro de Famílias" width={40} height={40}/>
                    Cadastro de Famílias
                </Link>
            </li>

            <li className='action_list_link'>
                <Link to="/donate" className='action_link'>
                    <img src={Donate} alt="Doações" width={40} height={40}/>
                    Doações
                </Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Home