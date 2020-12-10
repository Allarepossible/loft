import {takeEvery, call, put} from 'redux-saga/effects';

import {fetchCard, addCard} from '../api';
import {
    FETCH_CARD,
    ADD_CARD,
    fetchCardSuccess,
    fetchCardFailure,
    addCardFailure,
    addCardSuccess,
} from '../actions/card';

function* fetchCardSaga(action: any) {
    const data = yield call(fetchCard, action.payload);

    if (data.id) {
        yield put(fetchCardSuccess(data));
    } else {
        yield put(fetchCardFailure(data));
    }
}

function* addCardSaga(action: any) {
    const data = yield call(addCard, action.payload);

    if (data.success) {
        yield put(addCardSuccess(action.payload));
    } else {
        yield put(addCardFailure(data));
    }
}

export function* cardSaga() {
    yield takeEvery(FETCH_CARD, fetchCardSaga);
    yield takeEvery(ADD_CARD, addCardSaga);
}
