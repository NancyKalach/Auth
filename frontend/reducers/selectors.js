export const selectAllItems = state => Object.values(state.entities.items);

export const selectAll = state => Object.values(state.entities.all);

export const selectAllFavIds = state => {
    var favorites = [];
    Object.values(state.entities.favorites).forEach( fav => favorites.push(fav.item_id) )
    return favorites; 
}

export const selectAllFavItems = state => Object.values(state.entities.all).filter(
    item => selectAllFavIds(state).includes(item.id) 
)

export const selectAllFavObjects = state => Object.values(state.entities.favorites) 


// export const selectAllCartItems = state => Object.values(state.entities.all).filter(
//     item => state.entities.cart.includes(item.id)
// )

export const selectAllCartIds = state => {
    var cartIds = [];
    Object.values(state.entities.cart).forEach( cartItem => cartIds.push(cartItem.item_id) )
    return cartIds; 
}

export const selectAllCartItems = state => Object.values(state.entities.all).filter(
    item => selectAllCartIds(state).includes(item.id) 
)

export const selectAllCartObjects = state => Object.values(state.entities.cart) 
