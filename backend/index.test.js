const request = require('supertest');
const app = require('./');

describe('Lists API', () => {
    it('GET /lists', () => {
        return request(app)
        .get('/lists')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
            expect(response.body)
            .toEqual(expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(String),
                    title: expect.any(String),
                    author: expect.any(String),
                })
            ]))
        });
    });
    it('POST /lists', () => {
        return request(app)
        .post('/lists')
        .send({
            id: '1111',
            title: 'title',
            author: 'author'
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
            expect(response.body)
            .toEqual({ message: "success" })
        });
    });
    it('DELETE /lists/:id', () => {
        return request(app)
        .delete('/lists/1')
        .expect(200)
        .then((response) => {
            expect(response.body)
            .toEqual({ message: "success" })
        });
    });
});