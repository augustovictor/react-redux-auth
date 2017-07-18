import { SIGNIN_USER, SIGN_OUT_USER, SIGN_UP_USER, AUTH_ERROR } from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case SIGNIN_USER: {
            return { ...state, error: '', authenticated: true }; // Returns all the state plus authenticate: true
        }

        case SIGN_OUT_USER: {
            return { ...state, authenticated: false };
        }

        case AUTH_ERROR: {
            return { ...state, error: action.payload}
        }

        case SIGN_UP_USER: {
            return { ...state, authenticated: true }
        }

        default:
            return state;
    }
}