import { combineReducers } from 'redux';
import users from './users_reducer';
import shop from './shop_reducer';

export default combineReducers({
    users,
    shop
})