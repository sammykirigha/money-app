import React from 'react';
import './header.styles.scss'
import {Link} from 'react-router-dom'

const Header = () => (
    <div className='header'>
       <Link className='logo-container' to='/'>
           Passmoney
       </Link>
       <div className="options">
         <Link className="option" to='/'>How it works</Link>
         <Link className="option" to='/helppage'>Help</Link>
         <Link className="option" to='/loginsignup'>Login</Link>
         <Link className="option" to='/loginsignup'>Sign up</Link>
       </div>
    </div>
)

export default Header