import { connect } from 'react-redux';

import { selectAllItems} from '../../reducers/selectors';
import { fetchAllItems} from '../../actions/items_actions';
import ItemsIndex from './items_index';

const mapStateToProps = (state) => ({
    items: selectAllItems(state),
    loading: state.ui.loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
    fetchAllItems: (category) => dispatch(fetchAllItems(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsIndex);