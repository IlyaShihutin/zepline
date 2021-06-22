const axios = require('axios');

const requestConstants = {
  get: {
    method: 'GET',
    headers: { "Accept": "application/json" },
  },
  post: {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  },
  put: {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json"
    },
  }
};

export const fetchData = (type) => {
  return axios
    .get(`https://jogtracker.herokuapp.com/api/v1/test/echo`, requestConstants.type)
    .then(response => {
      return response.data;
    });
}
