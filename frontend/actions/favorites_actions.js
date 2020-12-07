import * as APIUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITE_ITEM = "RECEIVE_FAVORITE_ITEM";
export const RECEIVE_ALL_FAVORITES = "RECEIVE_ALL_FAVORITES";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const receiveFavoriteItem = favorite => ({
    type: RECEIVE_FAVORITE_ITEM, 
    favorite
})

export const receiveAllFavorites = favorites => ({
    type: RECEIVE_ALL_FAVORITES,
    favorites
})

export const removeFavorite = favorite => ({
    type: REMOVE_FAVORITE,
    favorite
})

export const createFavorite = (favorite) => (dispatch) => {
    return APIUtil.createFavorite(favorite).then(favorite => {dispatch(receiveFavoriteItem(favorite))});
};

export const fetchFavorites = () => (dispatch) => {
    return APIUtil.fetchFavorites().then(favorites => dispatch(receiveAllFavorites(favorites)))
}


export const destroyFavorite = (favorite) => (dispatch) => {
    return APIUtil.destroyFavorite(favorite).then(favorite => dispatch(removeFavorite(favorite)))
}