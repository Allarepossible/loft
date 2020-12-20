import {createAction} from './';

export const FETCH_ADDRESS_LIST: 'FETCH_ADDRESS_LIST' = 'FETCH_ADDRESS_LIST';
export const FETCH_ADDRESS_LIST_SUCCESS: 'FETCH_ADDRESS_LIST_SUCCESS' = 'FETCH_ADDRESS_LIST_SUCCESS';

export const FETCH_ROUTE: 'FETCH_ROUTE' = 'FETCH_ROUTE';
export const FETCH_ROUTE_SUCCESS: 'FETCH_ROUTE_SUCCESS' = 'FETCH_ROUTE_SUCCESS';

export const fetchAddressList = () =>
    createAction(FETCH_ADDRESS_LIST);
export const fetchAddressListSuccess = (payload: string[]) =>
    createAction(FETCH_ADDRESS_LIST_SUCCESS, payload);

export const fetchRoute = (payload: {from: string, to: string}) =>
    createAction(FETCH_ROUTE, payload);
export const fetchRouteSuccess = (payload: number[][]) =>
    createAction(FETCH_ROUTE_SUCCESS, payload);


export type AddressActions =
    | ReturnType<typeof fetchAddressList>
    | ReturnType<typeof fetchAddressListSuccess>
    | ReturnType<typeof fetchRoute>
    | ReturnType<typeof fetchRouteSuccess>;
