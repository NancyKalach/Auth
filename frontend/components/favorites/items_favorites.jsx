import React from 'react';

class ItemsFavorites extends React.Component {

    render(){
        const {favorites} = this.props;
        const {items} = this.props;

        return(
            <ul className= "favorites">
                { favorites.map(
                    (id) => (
                        <li key={id}>
                            {id}
                        </li>
                    )
                ) 
                }
            </ul>
        )

    }

}

export default ItemsFavorites;