const { request } = require('./user')

test('test get', () => {
    request("get").then(date => {
        expect(date.response.headers.Host).toBe('jogtracker.herokuapp.com');
    })
})

test('test post', () => {
    request("post").then(date => {
        expect(date.response.headers.Host).toBe('jogtracker.herokuapp.com');
    })
})

test('test put', () => {
    request("put").then(date => {
        expect(date.response.headers.Host).toBe('jogtracker.herokuapp.com');
    })
})
