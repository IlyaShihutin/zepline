import { handleResponse, handleResponse1, origin } from '../_helpers/handle-response';
import { requestConstants } from '../_constants/requestConstants';

const auth = async () => fetch(`https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin`, requestConstants.REQUEST_AUTH).then(handleResponse);
const get = async () => fetch(`https://jogtracker.herokuapp.com/api/v1/auth/user`, requestConstants.REQUEST_GET).then(handleResponse1);
const User = {
    auth,
    get
};


export default User;