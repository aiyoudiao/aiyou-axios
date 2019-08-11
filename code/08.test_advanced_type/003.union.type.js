// #region 联合类型 Code Module
{
    /**
     *	填充多少个空格
     *
     * @param {string} value
     * @param {*} padding
     * @returns
     */
    // function padLeft(value: string, padding: any) {
    function padLeft(value, padding) {
        if (typeof padding === 'number') {
            return Array(padding + 1).join(' ') + value;
        }
        if (typeof padding === 'string') {
            return padding + value;
        }
        throw new Error("The type of " + padding + " can only be one of a string and a number");
    }
    console.log(padLeft('ilovejwl', 20));
    console.log(padLeft('ilovejwl', 'zph'));
    console.log(padLeft('ilovejwl', true));
}
// #endregion 联合类型 Code Module End
// -----------------------------------------分隔符--------------------------------------------
