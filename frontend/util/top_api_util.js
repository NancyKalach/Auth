export const fetchAllTops = () => (
    $.ajax({
      method: 'GET',
      url: 'api/tops',
    })
);
  
  export const fetchSingleTop = id => (
    $.ajax({
      method: 'GET',
      url: `api/tops/${id}`
    })
);