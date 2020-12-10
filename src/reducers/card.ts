import {Reducer} from 'redux';
import {FETCH_CARD_SUCCESS, FETCH_CARD_FAILURE, ADD_CARD_FAILURE, ADD_CARD_SUCCESS} from '../actions/card'

const initialState = {
    cardInfo: {
        id: '',
        cardNumber: '',
        expiryDate: '',
        cardName: '',
        cvc: '',
    },
    isFetched: false,
    error: '',
};

const cardReducer: Reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ADD_CARD_SUCCESS:
        case FETCH_CARD_SUCCESS:
            return {
                cardInfo: action.payload,
                isFetched: true,
                error: '',
            };
        case ADD_CARD_FAILURE:
        case FETCH_CARD_FAILURE:
            return {
                ...state,
                isFetched: true,
                error: action.payload.error,
            };
    }
    return state;
};

export default cardReducer;
