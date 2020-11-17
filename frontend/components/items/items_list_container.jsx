import { connect } from 'react-redux';

import { selectAllItems} from '../../reducers/selectors';
import { receiveFavoriteItem } from '../../actions/items_actions';
import ItemsList from './items_list';

const mapStateToProps = (state) => ({
    items: selectAllItems(state),
    favorites: state.entities.favorites
});

const mapDispatchToProps = dispatch => ({
    receiveFavoriteItem: (id) => dispatch(receiveFavoriteItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);