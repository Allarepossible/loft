import {combineReducers} from 'redux';

import auth from './auth';
import user from './user';
import card from './card';
import address from './address';

export default combineReducers({
    auth,
    user,
    card,
    address,
});
