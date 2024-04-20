import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <header>
                <Link to ="/" class="logo"><span>M</span>ayura</Link>
                <ul>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Login"><button>Login</button></Link>
                    </li>
                </ul>
            </header>

        </nav>
    )
}

export default Navbar
