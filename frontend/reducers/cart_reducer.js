import { RECEIVE_ALL_CART_ITEMS, RECEIVE_CART_ITEM} from '../actions/cart_actions';

const cartReducer = (state = [], action) => {
    Object.freeze(state);
    
    let id;
    switch (action.type) {
      case RECEIVE_CART_ITEM:
        id = action.cart.item_id;
        if (state.indexOf(id) === -1){
          return [...state, id];
        } else {
          return [...state];
        }
      case RECEIVE_ALL_CART_ITEMS:
        return Object.values(action.items).map((item) => item.item_id)
      default:
        return state;
    }
};

export default cartReducer;