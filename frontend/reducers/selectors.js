export const selectAllItems = state => Object.values(state.entities.items);

export const selectAll = state => Object.values(state.entities.all);

export const selectAllFavorites = state => Object.values(state.entities.all).filter(
    item => state.entities.favorites.includes(item.id)
)

export const selectAllCartItems = state => Object.values(state.entities.all).filter(
    item => state.entities.cart.includes(item.id)
)