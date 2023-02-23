import { promises as fsPromises } from 'fs';
import path from 'path';

export default class FileUtils {
    static imagesFullPath = path.resolve('./images/full');
    static imagesThumbPath = path.resolve('./images/thumb');

    static async isThumbPathExist(){
        try {
            await fsPromises.access(FileUtils.imagesThumbPath, fsPromises.constants.F_OK | fsPromises.constants.W_OK | fsPromises.constants.R_OK);
        } catch {
            fsPromises.mkdir(FileUtils.imagesThumbPath, {recursive: true})
        }
    }
}