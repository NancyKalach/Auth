import * as APIUtil from '../util/top_api_util';

export const RECEIVE_ALL_TOPS = "RECEIVE_ALL_TOPS";
export const RECEIVE_SINGLE_TOP = "RECEIVE_SINGLE_TOP";

export const receiveAllTops = tops => ({
    type: RECEIVE_ALL_TOPS,
    tops
});
  
  export const receiveSingleTop = top => ({
    type: RECEIVE_SINGLE_TOP,
    top
});

export const fetchAllTops = () => (dispatch) => {
    return APIUtil.fetchAllTops().then(tops => {dispatch(receiveAllTops(tops))});
};

export const fetchSingleTop = () => (dispatch) => {
    return APIUtil.fetchSingleTop().then(top => {dispatch(receiveSingleTop(top))});
};


