import { RECEIVE_ALL_CART_ITEMS, RECEIVE_CART_ITEM, REMOVE_CART_ITEM} from '../actions/cart_actions';

const cartReducer = (state = {}, action) => {
    Object.freeze(state);

    let nextState={};
    switch (action.type) {
      case RECEIVE_CART_ITEM:
        const newCart = { [action.cart.id]: action.cart };
        return Object.assign({}, state, newCart)
      case REMOVE_CART_ITEM:
        nextState = Object.assign({}, state);
        delete nextState[action.cart.id];
        return nextState; 
      case RECEIVE_ALL_CART_ITEMS:
        return Object.assign({}, state, action.carts)
      default:
        return state;
    }
};

export default cartReducer;