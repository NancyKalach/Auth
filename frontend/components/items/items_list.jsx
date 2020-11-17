import React from 'react';
import { Link } from 'react-router-dom';

class ItemsList extends React.Component {

    constructor(props){
        super(props);
        this.state = { detail: false, favorite: false };
        this.toggleDetail = this.toggleDetail.bind(this);
        this.receiveFavorite = this.receiveFavorite.bind(this);
    }

    toggleDetail(e) {
        e.preventDefault();
        this.setState({
          detail: !this.state.detail
        });
    }

    // favorite(id){
    //     return this.props.favorites.includes(id);
    // }

    receiveFavorite(e, id){ 
        this.props.receiveFavoriteItem(id);
        // console.log(favorite(id));
    }


    render(){
        const {item} = this.props;
        const {favorites} = this.props;

        const icon = `${window.icon}`;
        const favorite = `${window.favorite}`;

        let detail;
        detail = <ul>
                    <li className="description"> {item.description}</li>
                    <li className="price"> $ {item.price}</li>
                </ul>

        return(
            <li key={item.id} onClick={this.toggleDetail}> 
                <Link to = {`/items/${item.id}`}>
                    <img className="item" src={item.photo_url} /> 
                </Link>
                <img onClick={(e)=> {this.receiveFavorite(e, item.id)}} className="favorite" 
                src={ favorites.includes(`${item.id}`) ? favorite : icon}/>
                {detail}
            </li>
        );
    }
}

export default ItemsList;