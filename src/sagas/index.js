import {all} from 'redux-saga/effects';
import authSagas from './Auth';
import OrdersSagas from './Orders';

export default function* rootSaga(getState) {
    yield all([
        authSagas(),
        OrdersSagas()
    ]);
}
