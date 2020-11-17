import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';

import { fetchAllItems, receiveFavoriteItem } from './actions/items_actions'
import { selectAllItems } from './reducers/selectors';


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
    window.receiveFavoriteItem = receiveFavoriteItem;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});