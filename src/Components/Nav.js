import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsapNav } from '../helpers/gsapHelper';

function Nav() {

  useEffect(() => {
    gsapNav();
  }, [])
  
  return (
    <div className='nav'>
        <Link className='nav-logo text-shadow' to='/'><h1>F1-App</h1></Link>
        <ul>
            <Link className='nav-link text-shadow' to='/drivers'>Campeonato de pilotos</Link>
            <Link className='nav-link text-shadow' to='/constructors'>Campeonato de constructores</Link>
        </ul>
    </div>
  )
}

export default Nav