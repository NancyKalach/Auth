import * as APIUtil from "../util/cart_api_util";

export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const RECEIVE_ALL_CART_ITEMS = "RECEIVE_ALL_CART_ITEMS";

export const receiveCartItem = cart => ({
    type: RECEIVE_CART_ITEM, 
    cart
})

export const receiveAllCartItems = carts => ({
    type: RECEIVE_ALL_CART_ITEMS,
    carts
})

export const createCartItem = (cart) => (dispatch) => {
    return APIUtil.createCartItem(cart).then(cart => {dispatch(receiveCartItem(cart))});
};

export const fetchCartItems = () => (dispatch) => {
    return APIUtil.fetchCartItems().then(carts => dispatch(receiveAllCartItems(carts)))
}