import { handleResponse, origin, config } from '../_helpers/handle-response';
import { requestConstants } from '../_constants/jogsConstants';

const auth = async () => fetch(`${origin}${config}/auth/uuidLogin`, requestConstants.REQUEST_AUTH).then(handleResponse);
const get = async (response) => fetch(`${origin}${config}/data/sync`, requestConstants.REQUEST_GET(response)).then(handleResponse);
const post = async (jog) => fetch(`${origin}${config}/data/jog`, requestConstants.REQUEST_POST(jog)).then(handleResponse);
const put = async (jog) => fetch(`${origin}${config}/data/jog`, requestConstants.REQUEST_PUT(jog)).then(handleResponse);

const User = {
    auth,
    get,
    post,
    put
};


export default User;