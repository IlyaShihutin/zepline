export function authHeader() {
    const user = localStorage.getItem('userToken');
    console.log("user")
    console.log(user)
    if (user) {
        return { 'Authorization': user.token };
    } else {
        return {};
    }
}