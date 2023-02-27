import supertest from 'supertest';
import { promises as fsPromises } from 'fs';
import app from '../index';
import FileUtils from '../common/fileUtils';

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

        it('method check file is created with a valid param', async () => {
            let thumbnailFile;
            thumbnailFile = await FileUtils.isExistThumbnail('encenadaport', 200, 200);
            if(thumbnailFile != undefined){
                fsPromises.unlink(thumbnailFile);
            }
            const response = await request.get('/api/images?filename=encenadaport&height=200&width=200');
            
            expect(await FileUtils.isExistThumbnail('encenadaport', 200, 200)).toContain('encenadaport-200x200.jpeg');
        });

        it('method check file is not created with a invalid param', async () => {
            let thumbnailFile;
            thumbnailFile = await FileUtils.isExistThumbnail('encenadaport', -200, 200);
            if(thumbnailFile != undefined){
                fsPromises.unlink(thumbnailFile);
            }
            const response = await request.get('/api/images?filename=encenadaport&height=-200&width=200');
            
            expect(await FileUtils.isExistThumbnail('encenadaport', -200, 200)).toBeUndefined();
        });
    });
});