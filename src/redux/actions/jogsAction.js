import { jogsConstants } from '../../_constants/jogsConstants';
import User from "../../_services/User.service"


const get = (response) => {
    return dispatch => {
        dispatch(request());
        User.get(response)
            .then(
                jogs => dispatch(success(jogs)),
                () => dispatch(failure())
            );
    };

    function request() { return { type: jogsConstants.GET_JOGS_GET } }
    function success(jogs) { return { type: jogsConstants.GET_JOGS_GET_SUCCESS, jogs } }
    function failure() { return { type: jogsConstants.GET_JOGS_GET_FAILURE } }
}

const post = (jog) => {
    return dispatch => {
        dispatch(request());
        User.post(jog)
            .then(
                (jog) => dispatch(success(jog)),
                () => dispatch(failure())
            );
    };

    function request() { return { type: jogsConstants.GET_JOGS_POST } }
    function success(newJog) { return { type: jogsConstants.GET_JOGS_POST_SUCCESS, newJog } }
    function failure() { return { type: jogsConstants.GET_JOGS_POST_FAILURE } }
}

const put = (jog, jogs) => {
    return dispatch => {
        dispatch(request());
        User.put(jog)
            .then(
                (newJog) => dispatch(success(newJog, jogs)),
                () => dispatch(failure())
            );
    };

    function request() { return { type: jogsConstants.GET_JOGS_PUT } }
    function success(newJog, jogs) {
        const allJogs = [...jogs];
        for (let i = 0; i < allJogs.length; i++) {
            if (allJogs[i].id === newJog.response.id) {
                allJogs[i] = newJog.response;
                break;
            }
        }
        return { type: jogsConstants.GET_JOGS_PUT_SUCCESS, allJogs }
    }
    function failure() { return { type: jogsConstants.GET_JOGS_PUT_FAILURE } }
}

const filter = (date) => {
    return { type: jogsConstants.FILTER, date };
}
const clearError = () => {
    return { type: jogsConstants.CLEAR_ERROR };
}
export const jogsAction = {
    get,
    post,
    put,
    filter,
    clearError
};