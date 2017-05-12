import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import loadPhoto from '../actions/loadPhotoSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(loadPhoto);

export default store;
