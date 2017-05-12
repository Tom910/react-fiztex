import { PHOTO_LOADED } from '../constants/photos';

const photoAction = photos => ({
    type: PHOTO_LOADED,
    photos
});

const urlRandomPhoto = 'https://api.unsplash.com/photos/random?client_id=cef673c119a4369af6491013ad909cdc96e1cebb4fe8449d4c9837d1ce152f7a&count=10';

const loadPhoto = (dispatch, getState) => {
    return fetch(urlRandomPhoto)
        .then(response => response.json())
        .then(data => {
            return dispatch(photoAction(data))
        });
};


export default loadPhoto;
