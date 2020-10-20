import { RECEIVE_ALL_TOPS, RECEIVE_SINGLE_TOP } from '../actions/tops_actions';

const topsReducer = (state = {}, action) => {
    Object.freeze(state);
  
    let top;
    switch (action.type) {
      case RECEIVE_ALL_TOPS:
        return Object.assign({}, state, action.tops);
      case RECEIVE_SINGLE_TOP:
        top = action.top;
        return Object.assign({}, state, { [top.id]: top });
      default:
        return state;
    }
};

export default topsReducer;