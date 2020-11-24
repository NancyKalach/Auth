import * as APIUtil from '../util/item_api_util';

export const RECEIVE_ALL_ITEMS = "RECEIVE_ALL_ITEMS";
export const RECEIVE_ALL = "RECEIVE_ALL";
export const RECEIVE_SINGLE_ITEM = "RECEIVE_SINGLE_ITEM";


export const START_LOADING_ALL_ITEMS = "START_LOADING_ALL_ITEMS";
export const START_LOADING_SINGLE_ITEM = "START_LOADING_SINGLE_ITEM";
// export const START_LOADING_FAVORITE_ITEMS = "START_LOADING_FAVORITE_ITEMS";


export const receiveAllItems = items => ({
    type: RECEIVE_ALL_ITEMS,
    items
});

export const receiveAll = items => ({
    type: RECEIVE_ALL,
    items
});

export const receiveSingleItem = item => ({
    type: RECEIVE_SINGLE_ITEM,
    item
});


export const fetchAllItems = (category) => (dispatch) => {
    dispatch(startLoadingAllItems());
    return APIUtil.fetchAllItems(category).then(items => {dispatch(receiveAllItems(items))});
};


export const fetchAll = () => (dispatch) => {
    return APIUtil.fetchAll().then(items => {dispatch(receiveAll(items))});
};


export const fetchSingleItem = (id) => (dispatch) => {
    dispatch(startLoadingSingleItem());
    return APIUtil.fetchSingleItem(id).then(item => {dispatch(receiveSingleItem(item))});
};


export const startLoadingAllItems = () => ({
    type: START_LOADING_ALL_ITEMS
});
  
export const startLoadingSingleItem = () => ({
    type: START_LOADING_SINGLE_ITEM
});

// export const startLoadingFavoriteItems = ()=> ({
//     type: START_LOADING_FAVORITE_ITEMS
// })