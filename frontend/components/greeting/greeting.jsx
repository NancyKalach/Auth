import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{

    constructor(props){
        super(props);
        this.state = { dropdown: false};
        this.dropdownClick = this.dropdownClick.bind(this);
    }

    componentDidMount(){
        this.setState({dropdown: false});
    }

    dropdownClick(){
        this.setState({dropdown: !this.state.dropdown})
    }

    render(){
        const {currentUser, logout} = this.props;
        const fav = window.fav;
        const cart = window.cart;
        const arrow = window.arrow;

        const sessionLinks = () => (
            <ul className = "login-signup">
                <li className="dropdown" onClick={(e) => this.dropdownClick(e)}>
                    <div className="account"> 
                        MY ACCOUNT <img className="cart-icon" src={arrow}/>
                    </div>
                        <ul className={ (this.state.dropdown) ? "account-dropdown" : "account-dropdown-click"}>
                            <li>
                                <Link to='/login'>
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to='/signup'>
                                     Signup
                                </Link> 
                            </li>
                            <li>
                                <Link to='/contact'>
                                    Contact Us
                                </Link>
                           </li>
                        </ul>
                </li>
                
    
                <li>
                    <Link to ="/userfavorites">
                    <img className="fav-icon" title="Your Favorites" src={ fav }/>
                    </Link>
                </li>
    
                <li>
                    <Link to ="/cart">
                    <img className="cart-icon" title="Your Cart" src={cart}/>
                    </Link>
                </li>
            </ul>
        );
    
        const personalGreeting = () => (
            <ul className = "login-signup">
                <li className="dropdown" onClick={(e) => this.dropdownClick(e)}>
                    <div className="account">  
                        Hi, {currentUser.username} ! <img className="cart-icon" src={arrow}/>
                    </div>
                        <ul className={ (this.state.dropdown) ? "account-dropdown" : "account-dropdown-click"}>
                            <li>
                                <Link to='/contact'>
                                    Contact Us
                                </Link>
                            </li>
                            <li onClick = {logout}>
                                <Link>
                                Log Out
                                </Link>
                             </li>       
                        </ul>
                </li>
    
                <li>
                    <Link to ="/userfavorites">
                    <img className="fav-icon" title="Your Favorites" src={ fav }/>
                    </Link>
                </li>                       
                <li>
                    <Link to ="/cart">
                    <img className="cart-icon" title="Your Cart" src={ cart }/>
                    </Link>
                </li>
    
            </ul>
        );
    
        return currentUser ? personalGreeting() : sessionLinks();
    }
}



export default Greeting;