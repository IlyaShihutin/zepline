import { authHeader } from '../_helpers/auth-header';

export const jogsConstants = {
    GET_JOGS_GET: 'GET_JOGS_GET',
    GET_JOGS_GET_SUCCESS: 'GET_JOGS_GET_SUCCESS',
    GET_JOGS_GET_FAILURE: 'GET_JOGS_GET_FAILURE',

    GET_JOGS_POST: 'GET_JOGS_POST',
    GET_JOGS_POST_SUCCESS: 'GET_JOGS_POST_SUCCESS',
    GET_JOGS_POST_FAILURE: 'GET_JOGS_POST_FAILURE',

    GET_JOGS_PUT: 'GET_JOGS_PUT',
    GET_JOGS_PUT_SUCCESS: 'GET_JOGS_PUT_SUCCESS',
    GET_JOGS_PUT_FAILURE: 'GET_JOGS_PUT_FAILURE',

    FILTER: "FILTER",
}

export const requestConstants = {
    REQUEST_GET: {
        method: 'GET',
        headers: { ...authHeader(), 'Content-Type': 'application/json', "Accept": "application/json" },
    },
    REQUEST_AUTH: {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "uuid=hello",
    },
    REQUEST_POST: function (jog) {
        return {
            method: 'POST',
            headers: { ...authHeader(), 'Content-Type': 'application/x-www-form-urlencoded', "Accept": "application/json" },
            body: jog
        }
    },
    REQUEST_PUT: function (jog) {
        console.log(jog)
        return {
            method: 'PUT',
            headers: { ...authHeader(), 'Content-Type': 'application/x-www-form-urlencoded', "Accept": "application/json" },
            body: jog
        }
    }
};