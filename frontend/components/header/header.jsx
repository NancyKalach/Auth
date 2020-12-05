import React from 'react';
import {Link} from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class Header extends React.Component {

    componentDidMount(){
        this.props.fetchAll();
        this.props.fetchFavorites();
        this.props.fetchCartItems();
    }

    render(){

        return(
            <div className="header">
                    <nav className="header-nav">
                        <ul className="header-list">
                            <li>
                                <Link className="homeLink" to="/">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <a  target="_blank" href="https://instagram.com/thenmk_shop/">
                                    <img className="cart-icon" title="Shop our Instagram" src="https://nmkshop.s3.us-east-2.amazonaws.com/insta.png" />
                                </a>
                            </li>


                        </ul>
    
                        <h2 className="logo">The NMK Shop</h2>
                        
                        <GreetingContainer />
                    </nav>
            </div>
        );
    }
}


export default Header;