import React from "react";

class ItemDetail extends React.Component {

    componentDidMount(){
        const id = this.props.match.params.itemId;
        this.props.fetchSingleItem(id);
    }

    render(){
        const {item} = this.props;

        return(
            <div className="item-detail">
                <img className="item" src={item.photo_url} /> 
                <ul>
                    <li>Description: {item.description}</li>
                    <li>Size: {item.size}</li>
                    <li>Price: {item.price}</li>
                </ul>
            </div>
        )
    }

}

export default ItemDetail;