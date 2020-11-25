import React from 'react';
import {Link} from 'react-router-dom';


class Cart extends React.Component {

    render(){
        const {loggedIn, cartItems} = this.props;
        if (loggedIn) {
            return(
                <div className="cart">
                    <div className="cart-item-detail">
                        <h1 className="cart-title"> MY CART <div className="cart-count">{cartItems.length} Products</div> </h1>
                        <ul className="carts-index">
                            { cartItems.map(
                                (item, idx) => (
                                    <div className="cart-list-container">
                                        <li className="cart-list" key={item.id} > 
                                            <div>
                                                <Link to = {`/items/${item.id}`}>
                                                    <img className="cart-item" src={item.photo_url} /> 
                                                </Link>
                                            </div>
                                            <div>
                                                <ul className="cart-details">
                                                    <li className="cart-description"> {item.description}</li>
                                                    <li className="cart-size"> Size: {item.size}</li>
                                                    <li className="cart-price"> $ {item.price}.00</li>
                                                </ul>
                                            </div>

                                        </li>
                                    </div>
                                )
                            )}
                        </ul>
                    </div>

                    <div className="order-summary">
                        Order Summary 
                    </div>
                </div>
            )
        } else {
            return(
                <div>
                     <div className="fav-home">
                        <img src={home} className="home"/>
                        <img src={home2} className="home2" />
                        <img src={home3} className="home3" />
                        <img src={home4} className="home4" />
                    </div>
                    <div className="fav-auth"> 
                    <div className="fav-auth-1"> You must be logged in! </div>
                    <div className="fav-auth-2">
                    please <Link className="nav-link" to='/login'> Login </Link>
                    or <Link className="nav-link" to='/signup'> Signup </Link>
                    to view your cart items
                    </div>
                </div>

                </div>
                
            );
        }
        

    }

}

export default Cart;