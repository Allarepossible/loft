import {createAction} from './';

export const FETCH_CARD: 'FETCH_CARD' = 'FETCH_CARD';
export const FETCH_CARD_SUCCESS: 'FETCH_CARD_SUCCESS' = 'FETCH_CARD_SUCCESS';
export const FETCH_CARD_FAILURE: 'FETCH_CARD_FAILURE' = 'FETCH_CARD_FAILURE';

export const ADD_CARD: 'ADD_CARD' = 'ADD_CARD';
export const ADD_CARD_SUCCESS: 'ADD_CARD_SUCCESS' = 'ADD_CARD_SUCCESS';
export const ADD_CARD_FAILURE: 'ADD_CARD_FAILURE' = 'ADD_CARD_FAILURE';

export const fetchCard = (payload: string) =>
    createAction(FETCH_CARD, payload);
export const fetchCardSuccess = (payload: {}) =>
    createAction(FETCH_CARD_SUCCESS, payload);
export const fetchCardFailure = (payload: {}) =>
    createAction(FETCH_CARD_FAILURE, payload);

export const addCard = (payload: string) =>
    createAction(ADD_CARD, payload);
export const addCardSuccess = (payload: {}) =>
    createAction(ADD_CARD_SUCCESS, payload);
export const addCardFailure = (payload: {}) =>
    createAction(ADD_CARD_FAILURE, payload);


export type AuthActions =
    | ReturnType<typeof fetchCard>
    | ReturnType<typeof fetchCardSuccess>
    | ReturnType<typeof fetchCardFailure>
    | ReturnType<typeof addCard>
    | ReturnType<typeof addCardSuccess>
    | ReturnType<typeof addCardFailure>;
