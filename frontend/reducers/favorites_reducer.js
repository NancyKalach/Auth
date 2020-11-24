import { RECEIVE_FAVORITE_ITEM, RECEIVE_ALL_FAVORITES, REMOVE_FAVORITE} from '../actions/favorites_actions';

const favoritesReducer = (state = [], action) => {
    Object.freeze(state);
    
    let id;
    let nextState;
    switch (action.type) {
      case RECEIVE_FAVORITE_ITEM:
        id = action.favorite.item_id;
        if (state.indexOf(id) === -1){
          return [...state, id];
        } else {
          return [...state];
        }
      case REMOVE_FAVORITE:
        nextState = [...state];
        nextState.splice([action.favorite.item_id]);
        return nextState;
      case RECEIVE_ALL_FAVORITES:
        return Object.values(action.favorites).map((favorite) => favorite.item_id)
      default:
        return state;
    }
};

export default favoritesReducer;