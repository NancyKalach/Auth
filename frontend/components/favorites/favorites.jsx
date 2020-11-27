import React from 'react';
import {Link} from 'react-router-dom';


class Favorites extends React.Component {

    constructor(props){
        super(props);
        this.deleteFav = this.deleteFav.bind(this);
    }

    deleteFav(favorite){
        this.props.favoritesObject.forEach(
            (fav) => {
                if (favorite.id === fav.item_id){
                    this.props.destroyFavorite(fav);
                }
            }
        )

    }

    render(){
        const home = window.home;
        const home2 = window.home2;
        const home3 = window.home3;
        const home4 = window.home4;
        const deletee = window.delete;

        const {loggedIn, favoriteItems} = this.props;
        if (loggedIn) {
            return(
                <div className="category">
                    <h1 className="fav-title"> MY WISHLIST <div className="fav-count">{favoriteItems.length} Products</div> </h1>
                    
                    <ul className="fav-index">
                        { favoriteItems.map(
                            (favorite, idx) => (
                                <li className="fav" key={idx} > 
                                <Link to = {`/items/${favorite.id}`}>
                                    <img className="item" src={favorite.photo_url} /> 
                                </Link>
                                <ul className="fav-details">
                                    <li className="description"> {favorite.description}</li>
                                    <li className="price"> $ {favorite.price}.00</li>
                                </ul>
                                <img className="delete-icon" src={deletee} 
                                onClick={(e) => {this.deleteFav(favorite)}} />
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
                        to view your favorites
                        </div>
                    </div>
                </div>
            );
        }
        

    }

}

export default Favorites;