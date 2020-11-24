import { connect } from 'react-redux';

import Favorites from './favorites';
import { selectAllFavorites } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.id),
    favoriteItems: selectAllFavorites(state)
});


export default connect(mapStateToProps)(Favorites);