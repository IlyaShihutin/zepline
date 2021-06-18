import { authHeader } from '../_helpers/auth-header';

export const requestConstants = {
    REQUEST_GET: {
        method: 'GET',
        headers: { "Authorization": "Bearer 0166a157b7ddcc50fb7aadaa18716e34e412a7eafacb19b890ef853fe786ecef", 'Content-Type': 'application/json', "Accept": "application/json" },
    },
    REQUEST_AUTH: {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "uuid=hello",
    },
    DEFAULT_REQUEST_OPTIONS_POST_JSON: function (params) {
        return {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params)
        }
    },
    DEFAULT_REQUEST_OPTIONS_POST: function (params) {
        return {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: params
        }
    },
};