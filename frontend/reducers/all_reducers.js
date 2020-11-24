import { RECEIVE_ALL } from '../actions/items_actions';

const allReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
      case RECEIVE_ALL:
        return Object.assign({}, action.items);
      default:
        return state;
    }
};

export default allReducer;