import { jogsConstants } from '../../_constants/jogsConstants';
let initialState = {
    jogs: [],
    isLoading: false,
    error: "",
    filter: {}
};
export default function jogsReducer(state = initialState, action) {
    switch (action.type) {
        case jogsConstants.GET_JOGS_PUT:
        case jogsConstants.GET_JOGS_POST:
        case jogsConstants.GET_JOGS_GET:
            return {
                ...state,
                isLoading: true
            };
        case jogsConstants.GET_JOGS_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                jogs: [...action.jogs.response.jogs]
            };
        case jogsConstants.GET_JOGS_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                jogs: [...state.jogs, action.newJog.response]
            };
        case jogsConstants.GET_JOGS_PUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                jogs: [...action.newJog]
            };
        case jogsConstants.GET_JOGS_GET_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: 'Error while getting the list of jogs'
            };
        case jogsConstants.GET_JOGS_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: 'Error while creating jog'
            };
        case jogsConstants.GET_JOGS_PUT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: 'Error while editing jog'
            };
        case jogsConstants.FILTER:
            return {
                ...state,
                filter: { ...action.date }
            };
        case jogsConstants.CLEAR_ERROR:
            return {
                ...state,
                error: ""
            };
        default: return state
    }
}