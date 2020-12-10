import {createAction} from './';

export const LOG_IN: 'LOG_IN' = 'LOG_IN';
export const LOG_OUT: 'LOG_OUT' = 'LOG_OUT';
export const AUTHENTICATE: 'AUTHENTICATE' = 'AUTHENTICATE';

export const logIn = (payload: string) =>
    createAction(LOG_IN, payload);

export const logOut = () =>
    createAction(LOG_OUT);

export const authenticate = (email: string, password: string) =>
    createAction(AUTHENTICATE, {email, password});

export type AuthActions =
    | ReturnType<typeof logIn>
    | ReturnType<typeof logOut>
    | ReturnType<typeof authenticate>;
