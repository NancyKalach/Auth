import React from "react";
import LoadingIcon from './loading_icon';

class ItemDetail extends React.Component {

    constructor(props){
        super(props);
        this.state = { photo: ""};
        this.receiveCartItem = this.receiveCartItem.bind(this);
        this.receiveFavorite = this.receiveFavorite.bind(this);
        
    }

    componentDidMount(){
        const id = this.props.match.params.itemId;
        var that = this;
        this.props.fetchSingleItem(id).then(function(){that.setState({photo: that.props.item.photo_url})})
    }

    receiveFavorite(e){ 
        if (!this.props.favoritesIds.includes(this.props.item.id) && (this.props.currentUserId)){
            this.props.createFavorite({user_id: this.props.currentUserId, item_id: this.props.item.id}).then(alert("This item has been added to your favorites"));
        }

        if (!this.props.currentUserId){
            alert("You must be logged in to add this item to your favorites");
        }
        
    }


    receiveCartItem(e){ 
        if (!this.props.cartIds.includes(this.props.item.id) && (this.props.currentUserId)){
            this.props.createCartItem({user_id: this.props.currentUserId, item_id: this.props.item.id}).then(alert("This item has been added to your cart"));
        }

        if (!this.props.currentUserId){
            alert("You must be logged in to add this item to your cart");
        }
        
    }



    render(){
        const {item, loading, options} = this.props;

        if (loading){
            return <LoadingIcon />;
        }

        return(
            <div className="item-detail-container">

                <div className="item-options"> 
                    <ul>
                        {options.map(
                            (option, idx) => (
                                    <li key={idx}> 
                                        <img onClick={(e) => {this.setState({photo: option}).bind(this)}}
                                        className="option-image" src={option} /> 
                                    </li>

                            )
                        )}
                    </ul>
                </div> 

                <div className="item-photo">
                    <img className="single-item" src={this.state.photo} /> 
                </div>  

                <div className = "item-detail">
                    <ul className="dets">
                        <li className="item-description"> {item.description}</li>
                        <li className="item-size">Size: {item.size}</li>
                        <li className="item-price"> $ {item.price}.00 </li>
                    </ul>
                    <button 
                    onClick={(e)=> {this.receiveCartItem(e)}}
                    className="cart-submit" type="submit"> Add to Cart</button>
                    <button 
                    onClick={(e)=> {this.receiveFavorite(e)}}
                    className="fav-submit" type="submit"> Add to Favorites</button>
                    <div className="policy">
                        <div >
                            <div className="policy-icon-div"> <img className="policy-icon" src="https://nmkshop.s3.us-east-2.amazonaws.com/delivery.png" /> </div>
                            <div className="policy-text">
                                <div className="policy-title"> Shipping Policy </div>
                                <p className="shipping-policy">
                                    Free Shipping on orders over $100.00 
                                    <br />
                                    7 - 15 business days
                                </p>
                            </div>

                        </div>

                        <div className="policy-text">
                            <div className="policy-icon-div"> <img className="policy-icon" src="https://nmkshop.s3.us-east-2.amazonaws.com/policy.png" /> </div>
                            <div className="policy-text">
                                <div className="policy-title"> Return Policy </div>
                                <p>
                                    Return or exchange within 30 days from the delivered date
                                </p>
                            </div>
                            
                        </div>
                    
                    </div>
                </div>   


            </div>
        )
    }

}

export default ItemDetail;