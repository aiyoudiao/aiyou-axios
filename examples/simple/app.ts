/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-17 23:15:10
 * @LastEditTime: 2019-09-17 23:15:10
 * @LastEditors: ilovejwl
 */
import axios from '../../src/index';

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
});
