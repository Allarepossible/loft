import {takeEvery, call, put} from 'redux-saga/effects';

import {fetchRegister} from '../api';
import {logIn} from '../actions/auth';
import {REGISTER, registerSuccess, registerFailure} from '../actions/register';

function* registrationSaga(action: any) {
    const data = yield call(fetchRegister, action.payload);

    if (data.success) {
        yield put(registerSuccess(action.payload));
        yield put(logIn(data.token));
    } else {
        yield put(registerFailure(data));
    }
}

export function* registerSaga() {
    yield takeEvery(REGISTER, registrationSaga);
}
