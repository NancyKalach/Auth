import React from 'react';

import { connect } from 'react-redux';
import { fetchAll } from '../../actions/items_actions';
import { fetchFavorites } from '../../actions/favorites_actions'
import { fetchCartItems } from '../../actions/cart_actions'
import Header from './header';

const mapDispatchToProps = dispatch => {
    return {
        fetchAll: () => dispatch(fetchAll()),
        fetchFavorites: () => dispatch(fetchFavorites()),
        fetchCartItems: () => dispatch(fetchCartItems())
    };
};

export default connect(null, mapDispatchToProps)(Header);
