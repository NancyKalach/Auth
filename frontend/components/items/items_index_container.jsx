import { connect } from 'react-redux';

import { selectAllItems} from '../../reducers/selectors';
import { fetchAllItems, receiveFavoriteItem } from '../../actions/items_actions';
import ItemsIndex from './items_index';

const mapStateToProps = (state) => ({
    items: selectAllItems(state)
});

const mapDispatchToProps = dispatch => ({
    fetchAllItems: (category) => dispatch(fetchAllItems(category)),
    receiveFavoriteItem: (id) => dispatch(receiveFavoriteItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsIndex);