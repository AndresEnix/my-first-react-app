import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.Header}>
            <header>
                <nav>
                    <ul>
                        <li><Link exact="true" to="/">Home</Link></li>
                        <li><Link exact="true" to="/persons">Persons</Link></li>
                        <li><Link exact="true" to="/post">Posts</Link></li>
                        <li><Link exact="true" to="/login">Log in</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;