import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test for response of API', () => {
    describe('Status code will be 200', () => {
        it('method get with / endpoints.', async () => {
        const response = await request.get('/');
  
        expect(response.statusCode).toBe(200);
        });

        it('method get with invalid /api/images?filename=fjord&height=-200&width=220 endpoints.', async () => {
        const response = await request.get('/api/images?filename=fjord&height=-200&width=220');
    
        expect(response.statusCode).toBe(200);
        }); 

        it('method get with invalid /api/images?filename=fjord&height=200&width=-220 endpoints.', async () => {
        const response = await request.get('/api/images?filename=fjord&height=200&width=-220');
    
        expect(response.statusCode).toBe(200);
        });

        it('method get with valid /api/images?filename=fjord&height=200&width=-220 endpoints.', async () => {
        const response = await request.get('/api/images?filename=fjord&height=200&width=220');
  
        expect(response.statusCode).toBe(200);
        });
    });
});