import * as APIUtil from '../util/item_api_util';

export const RECEIVE_ALL_ITEMS = "RECEIVE_ALL_ITEMS";
export const RECEIVE_SINGLE_ITEM = "RECEIVE_SINGLE_ITEM"


export const receiveAllItems = items => ({
    type: RECEIVE_ALL_ITEMS,
    items
});

export const receiveSingleItem = item => ({
    type: RECEIVE_SINGLE_ITEM,
    item
});
  

export const fetchAllItems = (category) => (dispatch) => {
    return APIUtil.fetchAllItems(category).then(items => {dispatch(receiveAllItems(items))});
};

export const fetchSingleItem = (id) => (dispatch) => {
    return APIUtil.fetchSingleItem(id).then(item => {dispatch(receiveSingleItem(item))});
};