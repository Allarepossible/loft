import {takeEvery, call, put} from 'redux-saga/effects';

import {fetchAuth} from '../api';
import {AUTHENTICATE, logIn} from '../actions/auth';

function* authenticateSaga(action: any) {
    const {email, password} = action.payload;
    const data = yield call(fetchAuth, email, password);

    if (data.success) {
        yield put(logIn(data.token));
    }
}

export function* authSaga() {
    yield takeEvery(AUTHENTICATE, authenticateSaga);
}
