import { RECEIVE_FAVORITE_ITEM, RECEIVE_ALL_FAVORITES, REMOVE_FAVORITE} from '../actions/favorites_actions';

const favoritesReducer = (state = {}, action) => {
    Object.freeze(state);
    
    let nextState={};
    switch (action.type) {
      case RECEIVE_FAVORITE_ITEM:
        const newFav = { [action.favorite.id]: action.favorite };
        return Object.assign({}, state, newFav)
      case REMOVE_FAVORITE:
        nextState = Object.assign({}, state);
        delete nextState[action.favorite.id];
        return nextState;
      case RECEIVE_ALL_FAVORITES:
        return Object.assign({}, state, action.favorites)
      default:
        return state;
    }
};

export default favoritesReducer;