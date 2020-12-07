import entities from './entities_reducer';
import session from './session_reducer';
import ui from './ui_reducer';

import { combineReducers } from 'redux';

export default combineReducers({
    entities,
    session,
    ui
});