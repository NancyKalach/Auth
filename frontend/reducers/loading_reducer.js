import {RECEIVE_ALL_ITEMS,
    RECEIVE_SINGLE_ITEM, 
    RECEIVE_FAVORITE_ITEM, 
    START_LOADING_ALL_ITEMS, 
    START_LOADING_SINGLE_ITEM} from '../actions/items_actions';
  
  const initialState = {
    indexLoading: false,
    detailLoading: false
    // ,favoriteLoading: false
  };
  
  const loadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_ITEMS:
            return Object.assign({}, state, { indexLoading: false });
        case RECEIVE_SINGLE_ITEM:
            return Object.assign({}, state, { detailLoading: false });
        // case RECEIVE_FAVORITE_ITEM:
        //     return Object.assign({}, state, {favoriteLoading: false});
        case START_LOADING_ALL_ITEMS:
            return Object.assign({}, state, { indexLoading: true });
        case START_LOADING_SINGLE_ITEM:
            return Object.assign({}, state, { detailLoading: true });
        default:
            return state;
    }
  };
  
  export default loadingReducer;
  