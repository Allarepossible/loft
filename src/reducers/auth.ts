import {Reducer} from 'redux';
import {LOG_IN, LOG_OUT} from '../actions/auth'

const initialState = {
    isLoggedIn: false,
};

const authReducer: Reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case LOG_IN:
            return {
                isLoggedIn: true,
            };
        case LOG_OUT:
            return {
                isLoggedIn: false,
            };
    }
    return state;
};

export default authReducer;
