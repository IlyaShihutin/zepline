export const origin = 'https://jogtracker.herokuapp.com';

export const config = '/api/v1/';

export const handleResponse = (response) => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || (data && data.exceptionMessage) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}