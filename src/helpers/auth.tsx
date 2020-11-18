import {logIn} from '../actions/auth';
import {serverLogin} from '../api';
import {AUTHENTICATE} from '../actions/auth';

export const authMiddleware = ({dispatch}: any) => (next: any) => async (action: any) => {
    if (action.type === AUTHENTICATE) {
        const {email, password} = action.payload;
        const success = await serverLogin(email, password);

        if (success) {
            dispatch(logIn());
        } else {
            next(action);
        }
    }
};
