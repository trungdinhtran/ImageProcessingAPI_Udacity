import { promises as fsPromises } from 'fs';
import path from 'path';
import sharp from 'sharp';
import Utils from './Utils';

export default class FileUtils {
  // full directory of the image
  static imagesFullDir = path.resolve('./images/full');
  // full directory of the thumbnail
  static imagesThumbDir = path.resolve('./images/thumb');

  /**
   * This is the isThumbPathExist function
   * Main feature of this function is check the directoty of thubnail is exist. If not, create the directoty
   */
  static createDirThumnail = async (): Promise<void> => {
    try {
      await fsPromises.access(
        FileUtils.imagesFullDir,
        fsPromises.constants.F_OK |
          fsPromises.constants.W_OK |
          fsPromises.constants.R_OK
      );
    } catch {
      fsPromises.mkdir(FileUtils.imagesThumbDir, { recursive: true });
    }
  };

  /**
   * This is the isExistFile function
   * @param filename This is the filename parameter
   * @returns returns true if the file exist, otherwise
   */
  static isExistFile = async (filename: string): Promise<boolean> => {
    try {
      await fsPromises.access(
        path.resolve(FileUtils.imagesFullDir, `${filename}.jpg`)
      );
      return true;
    } catch {
      return false;
    }
  };

  /**
   * This is the isExistFile function
   * @param filename This is the filename parameter
   * @returns returns true if the file exist, otherwise
   */
  static isExistThumbnail = async (
    filename: string,
    width: number,
    height: number
  ): Promise<string | undefined> => {
    const thumbnailPath = path.resolve(
      FileUtils.imagesThumbDir,
      `${filename}-${width}x${height}.jpeg`
    );
    try {
      await fsPromises.access(thumbnailPath);
      return thumbnailPath;
    } catch {
      return undefined;
    }
  };

  /**
   * This is the createThumbnailImage function
   * @param filename This is the filename parameter
   * @param width This is the width parameter
   * @param height This is the height parameter
   * @returns returns a full path of thumbnail if the thumbnail is created, otherwise
   */
  static createThumbnailImage = async (
    filename: string,
    width: number,
    height: number
  ): Promise<string | null> => {
    if (
      !Utils.isString(filename) ||
      !Utils.isNumberGreaterThan1(width) ||
      !Utils.isNumberGreaterThan1(height)
    ) {
      return null;
    }
    // full path of the image
    const imagePathFull = path.resolve(
      FileUtils.imagesFullDir,
      `${filename}.jpg`
    );
    // full path of the thumbnail
    const thumbPathFull = path.resolve(
      FileUtils.imagesThumbDir,
      `${filename}-${width}x${height}.jpeg`
    );

    try {
      await sharp(imagePathFull)
        .resize(height, width)
        .toFormat('jpeg')
        .toFile(thumbPathFull);
      return thumbPathFull;
    } catch (err) {
      console.error(`Can not create thumbnail file with error: ${err}`);
      return null;
    }
  };
}
