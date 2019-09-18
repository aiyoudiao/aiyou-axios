/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-18 14:54:41
 * @LastEditTime: 2019-09-18 15:33:17
 * @LastEditors: ilovejwl
 */

/* TypeScript 并不能把 e 参数推断为 AxiosError 类型，于是我们需要手动指明类型 */
import axios, { AxiosError } from '../../src/index';

axios({
  method: 'get',
  url: '/error/get1'
})
  .then(res => {
    console.log(res);
  })
  .catch(e => {
    console.log(e);
  });

axios({
  method: 'get',
  url: '/error/get'
})
  .then(res => {
    console.log(res);
  })
  .catch(e => {
    console.log(e);
  });

setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/get'
  })
    .then(res => {
      console.log(res);
    })
    .catch(e => {
      console.log(e);
    });
}, 5000);

axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
})
  .then(res => {
    console.log(res);
  })
  .catch(e => {
    console.log(e.message);
  });

axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
})
  .then(res => {
    console.log(res);
  })
  .catch((e: AxiosError) => {
    console.log(e.message);
    console.log(e.code);
  });
