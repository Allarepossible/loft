import {Reducer} from 'redux';
import {LOG_IN, LOG_OUT} from '../actions/auth'

const initialState = {
    isLoggedIn: false,
    token: '',
};

const authReducer: Reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case LOG_IN:
            return {
                token: action.payload,
                isLoggedIn: true,
            };
        case LOG_OUT:
            return {
                token: '',
                isLoggedIn: false,
            };
    }
    return state;
};

export default authReducer;
