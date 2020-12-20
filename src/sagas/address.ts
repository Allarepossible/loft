import {AnyAction} from 'redux';
import {takeEvery, call, put} from 'redux-saga/effects';

import {fetchAddressList, fetchRoute} from '../api';
import {
    FETCH_ROUTE,
    fetchAddressListSuccess,
    FETCH_ADDRESS_LIST,
    fetchRouteSuccess,
} from '../actions/address';

function* addressListSaga() {
    const data = yield call(fetchAddressList);

    if (data) {
        yield put(fetchAddressListSuccess(data.addresses));
    }
}

function* routeSaga(action: AnyAction) {
    const data = yield call(fetchRoute, action.payload);

    yield put(fetchRouteSuccess(data));
}

export function* adressSaga() {
    yield takeEvery(FETCH_ADDRESS_LIST, addressListSaga);
    yield takeEvery(FETCH_ROUTE, routeSaga);
}
