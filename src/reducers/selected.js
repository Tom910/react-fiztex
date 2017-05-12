import { PHOTO_SELECT } from '../constants/photos';

export default function(state = '', action) {
    switch (action.type) {
        case PHOTO_SELECT:
            return action.selectId;
        default:
            return state;
    }
}
