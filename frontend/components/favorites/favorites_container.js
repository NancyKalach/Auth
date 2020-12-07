import { connect } from 'react-redux';

import Favorites from './favorites';
import { selectAllFavItems, selectAllFavObjects} from '../../reducers/selectors';
import {destroyFavorite} from '../../actions/favorites_actions';

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.id),
    favoriteItems: selectAllFavItems(state),
    currentUserId: state.session.id,
    favoritesObject: selectAllFavObjects(state)
});


const mapDispatchToProps = (dispatch) => ({
    destroyFavorite: (favorite) => dispatch(destroyFavorite(favorite))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);