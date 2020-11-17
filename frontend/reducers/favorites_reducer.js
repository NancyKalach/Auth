import { RECEIVE_FAVORITE_ITEM } from '../actions/items_actions';

const favoritesReducer = (state = [], action) => {
    Object.freeze(state);
    
    let id;
    switch (action.type) {
      case RECEIVE_FAVORITE_ITEM:
        id = action.id;
        if (state.indexOf(id) === -1){
          return [...state, id];
        } else {
          return [...state];
        }
        
      default:
        return state;
    }
};

export default favoritesReducer;