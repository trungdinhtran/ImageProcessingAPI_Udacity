import express from 'express';
import routes from './routes'; 
import FileUtils from './common/fileUtils';

const app = express();
const port = 3000;

app.use(routes);

app.listen(port, () => {
    FileUtils.isThumbPathExist();
    console.log(`Server started in http://localhost:${port}`);
});