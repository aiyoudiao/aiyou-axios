/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-21 12:39:29
 * @LastEditTime: 2019-09-21 12:39:29
 * @LastEditors: ilovejwl
 */
import axios from '../../src';

axios
  .post(
    '/more/post',
    {
      a: 1
    },
    {
      auth: {
        username: 'Yee',
        password: '123456'
      }
    }
  )
  .then(res => {
    console.log(res);
  });
