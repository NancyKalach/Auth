import React from 'react';
import { Link } from 'react-router-dom';

const HomeNav = () => {
    return (
        <div className="nav-links">

        <Link to='/category/Tops'>
            Tops
        </Link>

        <Link to='/category/Pants'>
            Pants
        </Link>
        
        <Link to='/category/Jackets'>
            Jackets
        </Link>
    </div>
    )
};

export default HomeNav;