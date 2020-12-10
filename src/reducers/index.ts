import {combineReducers} from 'redux';

import auth from './auth';
import user from './user';
import card from './card';

export default combineReducers({
    auth,
    user,
    card,
});
