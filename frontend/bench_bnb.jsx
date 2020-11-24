import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';

import { fetchAllItems, fetchAll } from './actions/items_actions'
import { receiveFavoriteItem, fetchFavorites, createFavorite, destroyFavorite} from './actions/favorites_actions'
import { selectAllItems, selectAllFavorites, selectAll } from './reducers/selectors';
import {fetchCartItems, createCartItem} from './actions/cart_actions'


document.addEventListener('DOMContentLoaded', () => {

    let store;
    if (window.currentUser){
        const preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },

            session: {
                id: window.currentUser.id
            }
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.store = store;
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.fetchAllItems = fetchAllItems;
    window.selectAllItems = selectAllItems;
    window.selectAllFavorites = selectAllFavorites;
    window.receiveFavoriteItem = receiveFavoriteItem;
    window.fetchAll = fetchAll;
    window.selectAll = selectAll;
    window.fetchFavorites = fetchFavorites;
    window.createFavorite = createFavorite;
    window.createCartItem = createCartItem;
    window.fetchCartItems = fetchCartItems;
    window.destroyFavorite = destroyFavorite;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});