import { connect } from 'react-redux';

import Cart from './cart';
import { selectAllCartItems } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.id),
    cartItems: selectAllCartItems(state)
});


export default connect(mapStateToProps)(Cart);