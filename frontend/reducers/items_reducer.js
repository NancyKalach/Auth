import { RECEIVE_ALL_ITEMS, RECEIVE_SINGLE_ITEM } from '../actions/items_actions';

const itemsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    let item;
    switch (action.type) {
      case RECEIVE_ALL_ITEMS:
        return Object.assign({}, action.items);
      case RECEIVE_SINGLE_ITEM:
        item = action.item;
        return Object.assign({}, item );
      default:
        return state;
    }
};

export default itemsReducer;