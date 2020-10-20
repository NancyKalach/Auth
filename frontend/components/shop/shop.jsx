import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    return(
        
        <div className="shop">
            <Link to='/shop/tops'>
                <img className="shop-item" src= {window.tops} />
            </Link>
            <Link>
                <img className="shop-item" src= {window.pants} />
            </Link>
            <Link>
                <img className="shop-item" src= {window.jackets} />
            </Link>
            <Link>
                <img className="shop-item" src= {window.dresses} />
            </Link>
        </div>
    )
};

export default Shop;