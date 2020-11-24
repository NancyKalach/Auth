import React from 'react';
import {Link} from 'react-router-dom';


class Cart extends React.Component {

    render(){
        const {loggedIn, cartItems} = this.props;
        if (loggedIn) {
            return(
                <div className="category">
                    <h1 className="fav-title"> MY CART <div className="fav-count">{cartItems.length} Products</div> </h1>
                    
                    <ul className="items-index">
                        { cartItems.map(
                            (item, idx) => (
                                <li key={item.id} > 
                                <Link to = {`/items/${item.id}`}>
                                    <img className="item" src={item.photo_url} /> 
                                </Link>
                                <ul className="fav-details">
                                    <li className="description"> {item.description}</li>
                                    <li className="price"> $ {item.price}</li>
                                </ul>
                            </li>
                            )
                        ) 
                        }
                    </ul>
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