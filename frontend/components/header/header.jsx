import React from 'react';
import {Link} from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

const Header = () => {
    return(
        <div className="header">
                <nav className="header-nav">
                    <ul className="header-list">
                        <li className="dropdown">
                            <div className="shop"> Shop </div>
                            <ul className="dropdown-items">
                                <li>
                                    <Link to='/items?category=tops'>
                                        Tops
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/items?category=pants'>
                                        Pants
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/items?category=jackets'>
                                        Jackets
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <h2 className="logo">The NMK Shop</h2>
                    <GreetingContainer />
                </nav>
        </div>
    );
};

export default Header;