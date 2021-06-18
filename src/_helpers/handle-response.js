// export const origin = (location.hostname === 'localhost') ? 'https://jogtracker.herokuapp.com' : location.origin;
export function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    localStorage.setItem("userToken", data.response.access_token);
    if (!response.ok) {
      const error = (data && data.message) || (data && data.exceptionMessage) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
export function handleResponse1(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || (data && data.exceptionMessage) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}