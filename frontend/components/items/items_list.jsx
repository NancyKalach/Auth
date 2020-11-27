import React from 'react';
import { Link } from 'react-router-dom';

class ItemsList extends React.Component {

    constructor(props){
        super(props);
        this.receiveFavorite = this.receiveFavorite.bind(this);
    }

    receiveFavorite(e){ 
        if (!this.props.favoritesIds.includes(this.props.item.id)){
            this.props.createFavorite({user_id: this.props.currentUserId, item_id: this.props.item.id});
        }

        if (!this.props.currentUserId){
            alert("You must be logged in to add this item to your favorites");
        }
        
    }


    render(){
        const {item, favoritesIds} = this.props;

        const icon = window.icon;
        const favorite = window.favorite;


        return(
            <li key={item.id} > 
                <Link to = {`/items/${item.id}`}>
                    <img className="item" src={item.photo_url} /> 
                </Link>
                
                <img onClick={(e)=> {this.receiveFavorite(e)}} className="favorite-icon" 
                src={ favoritesIds.includes(item.id) ? favorite : icon}
                title="Add to favorites"/>

                <ul className="details">
                    <li className="description"> {item.description}</li>
                    <li className="price"> $ {item.price}.00</li>
                </ul>
            </li>
        );
    }
}

export default ItemsList;