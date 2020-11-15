import React from 'react';
import { Link } from 'react-router-dom';

class ItemsList extends React.Component {

    constructor(props){
        super(props);
        this.state = { detail: false };
        this.toggleDetail = this.toggleDetail.bind(this);
    }

    toggleDetail(e) {
        e.preventDefault();
        this.setState({
          detail: !this.state.detail
        });
    }

    render(){
        const {item} = this.props;
        let detail;
        detail = <ul>
                    <li>Description: {item.description}</li>
                    <li>Size: {item.size}</li>
                    <li>Price: {item.price}</li>
                </ul>

        return(
            <li key={item.id} onClick={this.toggleDetail}> 
                <Link to = {`/items/${item.id}`}>
                    <img className="item" src={item.photo_url} /> 
                </Link>
                {detail}
            </li>
        );
    }
}

export default ItemsList;