import React from 'react';

import ItemsListContainer from './items_list_container';


class ItemsIndex extends React.Component {

    componentDidMount(){
        const category = this.props.match.params.category;
        this.props.fetchAllItems(category);  
    }

    componentDidUpdate(prevProps){
        const category = this.props.match.params.category;
        if (category !== prevProps.match.params.category){
            this.props.fetchAllItems(category);  
        }
    }
    
    render(){
        const {items} = this.props;
        const {receiveFavoriteItem} = this.props;

        return(
            <ul className="items-index">
                { items.map(
                    (item, idx) => (
                        <ItemsListContainer
                        item={item}  key={idx} />
                    )
                ) 
                }
            </ul>
        )
    }
}

export default ItemsIndex;