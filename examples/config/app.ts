/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-19 13:59:23
 * @LastEditTime: 2019-09-19 14:16:17
 * @LastEditors: ilovejwl
 */
import axios from '../../src/index';
import qs from 'qs';

axios.defaults.headers.common['test2'] = 123;

axios({
  url: '/config/post',
  method: 'post',
  data: qs.stringify({
    a: 1
  }),
  headers: {
    test: '321'
  }
}).then(res => {
  console.log(res.data);
});

console.log({
  url: '/config/get',
  method: 'post',
  data: qs.stringify({
    a: 1
  }),
  headers: {
    test: '321'
  }
});

axios({
  url: '/config/get',
  method: 'post'
}).then(res => {
  console.log(res.data);
});
