import React from 'react';
import {Link} from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

const Header = () => {
    return(
        <div className="header">
            <nav className="header-nav">
                <ul className="header-list">
                    <li>
                        <Link to="/" className="logo">
                            The NMK Shop
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop">
                            Shop
                        </Link>
                    </li>
                </ul>
                <GreetingContainer />
            </nav>
        </div>
    );
};

export default Header;