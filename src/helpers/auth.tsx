import {takeEvery, call, put} from 'redux-saga/effects';

import {logIn} from '../actions/auth';
import {serverLogin} from '../api';
import {AUTHENTICATE} from '../actions/auth';

export function* authenticateSaga(action: any) {
    const {email, password} = action.payload;
    const success = yield call(serverLogin, email, password);

    if (success) {
        yield put(logIn());
    }
}

export function* authSaga() {
    yield takeEvery(AUTHENTICATE, authenticateSaga);
}
