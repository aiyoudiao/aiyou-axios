/*
 * @Descripttion: 测试最基本的axios功能的文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-18 10:03:54
 * @LastEditTime: 2019-09-18 12:30:15
 * @LastEditors: ilovejwl
 */
import axios from '../../src/index';

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: ['bar', 'baz']
  }
});

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: {
      bar: 'baz'
    }
  }
});

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: '@:$, '
  }
});

axios({
  method: 'get',
  url: '/base/get',
  params: {
    params: {
      foo: 'bar',
      baz: null
    }
  }
});

axios({
  method: 'get',
  url: '/base/get#hash',
  params: {
    foo: 'bar'
  }
});

axios({
  method: 'get',
  url: '/base/get?foo=bar',
  params: {
    bar: 'baz'
  }
});

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
});

const arr = new Int32Array([21, 31]);

axios({
  method: 'post',
  url: '/base/buffer',
  data: arr
});

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
});

axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json;charset=utf-8'
  },
  data: {
    a: 1,
    b: 2
  }
});

const paramsString = 'q=URLUtils.searchParams&topic=api';
const searchParams = new URLSearchParams(paramsString);

axios({
  method: 'post',
  url: '/base/post',
  data: searchParams
});

// tslint:disable-next-line: no-floating-promises
axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log(res);
});

// tslint:disable-next-line: no-floating-promises
axios({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  data: {
    a: 3,
    b: 4
  }
}).then(res => {
  console.log(res);
});
