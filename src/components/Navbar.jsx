import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="navbar bg-dark" data-bs-theme='dark'>
        <div className="container-fluid">
            <Link className='navbar-link' to='/'> Home </Link> 
            
            {props.loggedIn ? (
                <>
                    <Link className='nav-link' to='/create'>Create Post</Link>
                    <Link className='nav-link' to='/' onClick={props.logUserOut}>Log Out</Link>
                </>
            ): (
                <>
                <Link className='nav-link' to='/register'>Register</Link>
                <Link className='nav-link' to='/login'>Log In</Link>
                </>
            )}
        </div>
    </nav>
  )
}
