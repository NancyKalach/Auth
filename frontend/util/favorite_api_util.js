export const createFavorite = (favorite) => (
    $.ajax({
        method: 'POST',
        url: 'api/favorites',
        data: {favorite}
    })
);

export const fetchFavorites = () => (
    $.ajax({
      method: 'GET',
      url: 'api/favorites'
    })
);

export const destroyFavorite = favorite => (
    $.ajax({
      method: 'DELETE',
      url: `api/favorites/${favorite.id}`
    })
);
  