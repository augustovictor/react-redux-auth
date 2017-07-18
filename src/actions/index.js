import axios from 'axios';
import { browserHistory } from 'react-router'; // Communicate information about the URL to react-router and also make changes to url
import { SIGNIN_USER, AUTH_ERROR, SIGN_OUT_USER, SIGN_UP_USER, SIGNUP_ERROR } from './types';

const ROOT_URL = 'http://localhost:4000';

export function signInUser({ email, password }) {
    return function(dispatch) { // Gives us direct access to the dispatch which sends the action created to all reducers
        // It allows us to dispatch as many functions as needed
        axios.post(`${ROOT_URL}/login`, { email, password })
        .then(response => {
            dispatch({ type: SIGNIN_USER });
            localStorage.setItem('token', response.data.tokens[0].token); // localStorage.getItem('token');
            browserHistory.push('/feature');
        })
        .catch(err => {
            dispatch(authError('Invalid credentials'))
        });
    }
}

export function authError(string) {
    return {
        type: AUTH_ERROR,
        payload: string
    };
}

export function signOutUser() {
    localStorage.removeItem('token');
    return { type: SIGN_OUT_USER };
}

export function signUpUser({ name, email, password }) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/users`, { name, email, password })
        .then(response => {
            dispatch({ type: SIGNIN_USER });
            localStorage.setItem('token', response.data.tokens[0].token);
            browserHistory.push('/feature');
        })
        .catch(err => {
            dispatch(authError(err.response.data.errors));
        });
    }
}