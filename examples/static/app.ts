/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-21 18:06:22
 * @LastEditTime: 2019-09-21 18:07:54
 * @LastEditors: ilovejwl
 */

import axios, { AxiosError } from '../../src/index';

function getA() {
  return axios.get('/more/A');
}

function getB() {
  return axios.get('/more/B');
}

axios.all([getA(), getB()]).then(
  axios.spread(function(resA, resB) {
    console.log(resA.data);
    console.log(resB.data);
  })
);

axios.all([getA(), getB()]).then(([resA, resB]) => {
  console.log(resA.data);
  console.log(resB.data);
});

const fakeConfig = {
  baseURL: 'https://www.baidu.com/',
  url: '/user/12345',
  params: {
    idClient: 1,
    idTest: 2,
    testString: 'thisIsATest'
  }
};
console.log(axios.getUri(fakeConfig));
