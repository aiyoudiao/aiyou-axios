/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-21 14:12:13
 * @LastEditTime: 2019-09-21 14:13:27
 * @LastEditors: ilovejwl
 */
import axios from '../../src/index';
import { AxiosError } from '../../src/helpers/error';

axios
  .get('/more/304')
  .then(res => {
    console.log(res);
  })
  .catch((e: AxiosError) => {
    console.log(e.message);
  });

axios
  .get('/more/304', {
    validateStatus(status) {
      return status >= 200 && status < 400;
    }
  })
  .then(res => {
    console.log(res);
  })
  .catch((e: AxiosError) => {
    console.log(e.message);
  });
