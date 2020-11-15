import { connect } from 'react-redux';

import { fetchSingleItem } from '../../actions/items_actions';
import ItemDetail from './item_detail';

const mapStateToProps = (state) => ({
    item: state.entities.items
});

const mapDispatchToProps = dispatch => ({
    fetchSingleItem: (id) => dispatch(fetchSingleItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);