import {Reducer} from 'redux';
import {
    AddressActions,
    FETCH_ADDRESS_LIST,
    FETCH_ADDRESS_LIST_SUCCESS,
    FETCH_ROUTE,
    FETCH_ROUTE_SUCCESS,
} from '../actions/address'

const initialState = {
    addressList: [],
    coordinates: [],
    route: {
        from: '',
        to: '',
    },
    isLoading: false,
};

const addressReducer: Reducer = (
    state = initialState,
    action: AddressActions
) => {
    switch (action.type) {
        case FETCH_ADDRESS_LIST:
            return {
                ...state,
                isLoading: true,
            };

        case FETCH_ADDRESS_LIST_SUCCESS:
            return {
                ...state,
                addressList: action.payload,
                isLoading: false,
            };
        case FETCH_ROUTE:
            return {
                ...state,
                coordinates: [],
                isLoading: true,
            };
        case FETCH_ROUTE_SUCCESS:
            return {
                ...state,
                coordinates: action.payload,
                isLoading: false,
            };
    }
    return state;
};

export default addressReducer;
