export default class Utils {
    /**
    * This is the isString function
    * @param value This is the value parameter
    * @returns returns true if value is a string, otherwise
    */
    static isString = (value : any) : boolean => {
        if (typeof value != 'undefined' && value)
        {
            return true;
         }
         return false;
    };
    /**
    * This is the isNumberGreaterThan1 function
    * @param value This is the value parameter
    * @returns returns true if value is a number and greater than 1, otherwise
    */
    static isNumberGreaterThan1 = (value: any): boolean => {
        if ((value != null) && (value !== '') && !isNaN(Number(value.toString())) && value > 0)
        {
            return true;
        }
        return false;
    };
}