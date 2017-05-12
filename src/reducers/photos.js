import { PHOTO_LOADED } from '../constants/photos';

export default function(state = [], action) {
    switch (action.type) {
        case PHOTO_LOADED:
            return [
                ...state,
                ...action.photos
            ];
        default:
            return state;
    }
}
