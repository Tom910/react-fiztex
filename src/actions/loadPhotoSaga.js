import { call, put, takeLatest } from 'redux-saga/effects'
import { PHOTO_LOADED, PHOTO_FETCH } from '../constants/photos';

const urlRandomPhoto = 'https://api.unsplash.com/photos/random?client_id=cef673c119a4369af6491013ad909cdc96e1cebb4fe8449d4c9837d1ce152f7a&count=10';

const fetchWrapper = method => fetch(method)
    .then(response => response.json());

function* loadPhoto(action) {
    const result = yield call(fetchWrapper, urlRandomPhoto);

    yield put({ type: PHOTO_LOADED, photos: result });
}

function* loadPhotoSaga() {
    yield takeLatest(PHOTO_FETCH, loadPhoto); // или takeEvery
}

export default loadPhotoSaga;
