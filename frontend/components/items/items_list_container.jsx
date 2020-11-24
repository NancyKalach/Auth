import { connect } from 'react-redux';

import { selectAllItems} from '../../reducers/selectors';
import { createFavorite } from '../../actions/favorites_actions';
import ItemsList from './items_list';

const mapStateToProps = (state) => ({
    items: selectAllItems(state),
    favorites: state.entities.favorites,
    currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
    createFavorite: (favorite) => dispatch(createFavorite(favorite))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);