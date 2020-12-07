import { connect } from 'react-redux';

import Cart from './cart';
import { selectAllCartItems, selectAllCartObjects} from '../../reducers/selectors';
import {destroyCartItem} from '../../actions/cart_actions'

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.id),
    cartItems: selectAllCartItems(state),
    cartObjects: selectAllCartObjects(state)
});

const mapDispatchToProps = (dispatch) => ({
    destroyCartItem: (cart) => dispatch(destroyCartItem(cart))
})



export default connect(mapStateToProps, mapDispatchToProps)(Cart);