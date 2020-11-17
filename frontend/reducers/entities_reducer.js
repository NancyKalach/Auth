import { combineReducers } from 'redux';
import users from './users_reducer';
import items from './items_reducer';
import favorites from './favorites_reducer';

export default combineReducers({
    users,
    items,
    favorites
})