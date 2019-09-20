/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-20 10:56:54
 * @LastEditTime: 2019-09-20 11:00:44
 * @LastEditors: ilovejwl
 */
const cookie = {
  /**
   * @description	用正则表达式解析到 name 对应的值
   * @author ilovejwl
   * @date 2019-09-20
   * @param {string} name
   * @returns {(string | null)}
   */
  read (name: string): string | null {
    const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
    return match ? decodeURIComponent(match[3]) : null;
  }
}

export default cookie;
