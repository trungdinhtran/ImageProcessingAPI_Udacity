import Utils from "../../common/Utils";

describe('Tests for Utils', () => {

    describe('function isString is check value is string', () => {
        it('should return true because data is string', () => {
            expect(Utils.isString("this is string")).toBeTrue();
        });
        it('should return true because data is string', () => {
            expect(Utils.isString("00000000")).toBeTrue();
        });
        it('should return false because data is empty', () => {
            expect(Utils.isString('')).toBeFalse();
        });
    });

    describe('function isNumberGreaterThan1 is check value is number and greater than 1', () => {
        it('should return true because data is 15', () => {
            expect(Utils.isNumberGreaterThan1(15)).toBeTrue();
        });
        it('should return false because data is 0', () => {
            expect(Utils.isNumberGreaterThan1(0)).toBeFalse();
        });
        it('should return false because data is -1', () => {
            expect(Utils.isNumberGreaterThan1(-1)).toBeFalse();
        });
        it('should return true because data is 1', () => {
            expect(Utils.isNumberGreaterThan1(1)).toBeTrue();
        });
    });
});