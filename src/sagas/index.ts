import {fork} from 'redux-saga/effects';

import {authSaga} from './auth';
import {registerSaga} from './register';
import {cardSaga} from './card';
import {adressSaga} from './address';

export default function* rootSaga() {
    yield fork(cardSaga);
    yield fork(authSaga);
    yield fork(registerSaga);
    yield fork(adressSaga);
}
