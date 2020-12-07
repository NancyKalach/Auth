export const createCartItem = (cart) => (
    $.ajax({
        method: 'POST',
        url: 'api/carts',
        data: {cart}
    })
);

export const fetchCartItems = () => (
    $.ajax({
      method: 'GET',
      url: 'api/carts'
    })
);

export const destroyCartItem = cart => (
    $.ajax({
      method: 'DELETE',
      url: `api/carts/${cart.id}`
    })
);
  