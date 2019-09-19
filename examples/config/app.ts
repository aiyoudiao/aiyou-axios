/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-19 13:59:23
 * @LastEditTime: 2019-09-19 15:31:47
 * @LastEditors: ilovejwl
 */
import axios, { AxiosTransformer } from '../../src/index';
import qs from 'qs';

axios.defaults.headers.common['test2'] = 123;

// tslint:disable-next-line: no-floating-promises
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

// tslint:disable-next-line: no-floating-promises
axios({
  url: '/config/get',
  method: 'post'
}).then(res => {
  console.log(res.data);
});

// tslint:disable-next-line: no-floating-promises
axios({
  transformRequest: [
    function(data) {
      return qs.stringify(data);
    },
    ...(axios.defaults.transformRequest as AxiosTransformer[])
  ],
  transformResponse: [
    ...(axios.defaults.transformResponse as AxiosTransformer[]),
    function(data) {
      if (typeof data === 'object') {
        data.b = 2;
      }
      return data;
    }
  ],
  url: '/config/post',
  method: 'post',
  data: {
    a: 1
  }
}).then(res => {
  console.log(res.data);
});
