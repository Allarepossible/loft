import {Reducer} from 'redux';
import {REGISTER_SUCCESS, REGISTER_FAILURE} from '../actions/register'

const initialState = {
    error: '',
    userInfo: {
        name: '',
        surname: '',
        email: '',
        password: '',
    },
};

const userReducer: Reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                userInfo: action.payload,
                error: '',
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            };
    }
    return state;
};

export default userReducer;
