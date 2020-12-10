import {fork} from 'redux-saga/effects';

import {authSaga} from './auth';
import {registerSaga} from './register';
import {cardSaga} from './card';

export default function* rootSaga() {
    yield fork(cardSaga);
    yield fork(authSaga);
    yield fork(registerSaga);
}
