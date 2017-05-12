import { combineReducers } from 'redux'
import photos from './photos';
import selected from './selected';

const rootReducer = combineReducers({
    selected,
    photos
});

export default rootReducer;
