const server = require('../../../../server/server.js');
const request = require('request');
const base = 'http://localhost:3000';

test('static page should return status code 200', () => {
    request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
    });
});