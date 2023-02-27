import FileUtils from "../../common/fileUtils";

describe('Tests for FileUtils', () => {

    describe('test create thumbnailfile (return a path of file if success)', async () => {
        it('should return an null because a width is a negative number', async () => {
            expect(await FileUtils.createThumbnailImage("fjord", -100, 100)).toBeNull();
        });
        it('should return an null because a height is a negative number', async () => {
            expect(await FileUtils.createThumbnailImage("fjord", 100, -100)).toBeNull();
        });
        it('should return an path of image', async () => {
            expect(await FileUtils.createThumbnailImage("fjord", 150, 150)).toContain("images/thumb/fjord-150x150.jpeg");
        });
    });
});