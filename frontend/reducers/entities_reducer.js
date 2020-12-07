import { combineReducers } from 'redux';
import users from './users_reducer';
import items from './items_reducer';
import item from './item_reducer';
import all from './all_reducers';
import favorites from './favorites_reducer';
import cart from './cart_reducer';

export default combineReducers({
    users,
    items,
    item,
    all,
    favorites,
    cart
})