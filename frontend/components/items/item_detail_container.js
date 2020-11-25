import { connect } from 'react-redux';

import { fetchSingleItem } from '../../actions/items_actions';
import { createCartItem } from '../../actions/cart_actions';
import { createFavorite } from '../../actions/favorites_actions';
import ItemDetail from './item_detail';

const mapStateToProps = (state) => ({
    item: state.entities.item,
    options: state.entities.item.options,
    loading: state.ui.loading.detailLoading,
    cartItems: state.entities.cart,
    favorites: state.entities.favorites,
    currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
    fetchSingleItem: (id) => dispatch(fetchSingleItem(id)),
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    createCartItem: (cart) => dispatch(createCartItem(cart))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);