import React from 'react';
import queryString from 'query-string';

import ItemsList from './items_list';

class ItemsIndex extends React.Component {

    componentDidMount(){
        const values = queryString.parse(this.props.location.search)
        this.props.fetchAllItems(values.category);  
    }
    
    render(){
        const {items} = this.props;

        return(
            <ul className="items-index">
                { items.map(
                    item => (
                        <ItemsList item={item} />
                    )
                ) 
                }
            </ul>
        )
    }
}

export default ItemsIndex;