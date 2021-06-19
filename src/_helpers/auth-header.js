export function authHeader() {
    let user = JSON.parse(localStorage.getItem('userToken'));

    if (user && user.access_token) {
        return { 'Authorization': 'Bearer ' + user.access_token };
    } else {
        return {};
    }
}