import express from 'express';
import FileUtils from '../../common/fileUtils';
import Utils from '../../common/Utils';

const images = express.Router();

images.get('/', async (request, response) => {
    let thumbnailFile;
    const filename =  request.query.filename as string;
    const width = request.query.width as string;
    const height = request.query.height as string;

    if (!Utils.isString(filename) || !Utils.isNumberGreaterThan1(parseInt(width, 10)) || !Utils.isNumberGreaterThan1(parseInt(height, 10))) {
        response.send(`Invalid param. Please valid input!!!`);
        return;
    }
    thumbnailFile = await FileUtils.isExistThumbnail(filename, parseInt(width, 10), parseInt(height, 10));
    if (thumbnailFile) {
        console.log(`Thumbnail file is exist`);
        response.sendFile(thumbnailFile);
        return;
    }

    if (!(await FileUtils.isExistFile(filename)))  {
        response.send(`The file: ${filename} can not be found!!!`);
        return;
    }
    thumbnailFile = await FileUtils.createThumbnailImage(filename, parseInt(width, 10), parseInt(height, 10));
    if (thumbnailFile) {
        response.sendFile(thumbnailFile);
        return;
    } else {
        response.send(`Can not create thumbnail file`);
        return;
    }
 });

export default images;