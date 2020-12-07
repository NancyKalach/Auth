import React from 'react';

import ItemsListContainer from './items_list_container';
import LoadingIcon from './loading_icon';


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
        const {items, loading} = this.props;
        
        if (loading){
            return <LoadingIcon />;
        }

        return(
            <div className="category">
                <h1 className="category-name"> {this.props.match.params.category} <div className="fav-count">{items.length} Products</div></h1>
                <ul className="items-index">
                    { items.map(
                        (item, idx) => (
                            <ItemsListContainer
                            item={item}  key={idx} />
                        )
                    ) 
                    }
                </ul>
            </div>
        )
    }
}

export default ItemsIndex;