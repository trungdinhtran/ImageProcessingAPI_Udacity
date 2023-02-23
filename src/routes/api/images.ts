import express from 'express'

const images = express.Router();

images.get('/', (req, res) => { 
    res.send("Hello, I am images route");
 });

export default images;