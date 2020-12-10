import {createAction} from './';

export const REGISTER: 'REGISTER' = 'REGISTER';
export const REGISTER_SUCCESS: 'REGISTER_SUCCESS' = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE: 'REGISTER_FAILURE' = 'REGISTER_FAILURE';

export const register = (payload: {}) =>
    createAction(REGISTER, payload);

export const registerSuccess = (payload: string) =>
    createAction(REGISTER_SUCCESS, payload);

export const registerFailure = (payload: string) =>
    createAction(REGISTER_FAILURE, payload);

export type RegisterActions =
    | ReturnType<typeof register>
    | ReturnType<typeof registerSuccess>
    | ReturnType<typeof registerFailure>;
