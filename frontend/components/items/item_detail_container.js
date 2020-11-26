import { connect } from 'react-redux';

import { fetchSingleItem } from '../../actions/items_actions';
import { createCartItem } from '../../actions/cart_actions';
import { createFavorite } from '../../actions/favorites_actions';
import {selectAllCartIds, selectAllFavIds} from '../../reducers/selectors'
import ItemDetail from './item_detail';

const mapStateToProps = (state) => ({
    item: state.entities.item,
    options: state.entities.item.options,
    loading: state.ui.loading.detailLoading,
    currentUserId: state.session.id,
    cartIds: selectAllCartIds(state),
    favoritesIds: selectAllFavIds(state)
});

const mapDispatchToProps = dispatch => ({
    fetchSingleItem: (id) => dispatch(fetchSingleItem(id)),
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    createCartItem: (cart) => dispatch(createCartItem(cart))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);