import express from 'express';
import images from './api/images';

const routes = express.Router();

routes.use('/api/images', images);

routes.get('/', (req, res) => {
  res.send(`Welcome to my project`);
});

export default routes;
