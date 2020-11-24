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