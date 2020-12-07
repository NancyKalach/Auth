import { RECEIVE_SINGLE_ITEM } from '../actions/items_actions';

const itemReducer = (state = { options: [] }, action) => {
    Object.freeze(state);
    
    let item;
    switch (action.type) {
      case RECEIVE_SINGLE_ITEM:
        item = action.item;
        return Object.assign({}, item );
      default:
        return state;
    }
};

export default itemReducer;