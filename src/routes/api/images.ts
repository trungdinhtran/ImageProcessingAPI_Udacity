import express from 'express'
import FileUtils from '../../common/fileUtils';
import Utils from '../../common/Utils';

const images = express.Router();

images.get('/', async (request, response) => {
    let thumbnailFile;
    const filename =  request.query.filename;
    const width = request.query.width;
    const height = request.query.height;

    if(!Utils.isString(filename) || !Utils.isNumberGreaterThan1(width) || !Utils.isNumberGreaterThan1(height)){
        response.send(`Invalid param. Please valid input!!!`);
        return;
    }
    thumbnailFile = await FileUtils.isExistThumbnail(filename, Number(width?.toString()), Number(height?.toString));
    console.log(`Thumbnail file is exist: ${thumbnailFile}`);
    if(thumbnailFile){
        console.log(`Thumbnail file is exist`);
        response.sendFile(thumbnailFile);
        return;
    }

    if(!(await FileUtils.isExistFile(filename))){
        response.send(`The file: ${filename} can not be found!!!`);
        return;
    }
    thumbnailFile = await FileUtils.createThumbnailImage(filename, Number(height?.toString()), Number(width?.toString()));
    if(thumbnailFile){
        response.sendFile(thumbnailFile);
        return;
    }else{
        response.send(`Can not create thumbnail file`);
        return;
    }
 });

export default images;