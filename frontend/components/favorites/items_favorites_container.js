import { connect } from 'react-redux';

import ItemsFavorites from './items_favorites';
import {selectAllItems} from '../../reducers/selectors';

const mapStateToProps = (state) => ({
    favorites: state.entities.favorites,
    items: selectAllItems(state)
});


export default connect(mapStateToProps)(ItemsFavorites);