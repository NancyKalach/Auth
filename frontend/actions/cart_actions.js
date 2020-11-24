import * as APIUtil from "../util/cart_api_util";

export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const RECEIVE_ALL_CART_ITEMS = "RECEIVE_ALL_CART_ITEMS";

export const receiveCartItem = cart => ({
    type: RECEIVE_CART_ITEM, 
    cart
})

export const receiveAllCartItems = items => ({
    type: RECEIVE_ALL_CART_ITEMS,
    items
})

export const createCartItem = (item) => (dispatch) => {
    return APIUtil.createCartItem(item).then(item => {dispatch(receiveCartItem(item))});
};

export const fetchCartItems = () => (dispatch) => {
    return APIUtil.fetchCartItems().then(items => dispatch(receiveAllCartItems(items)))
}