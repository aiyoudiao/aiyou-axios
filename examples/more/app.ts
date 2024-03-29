/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-19 20:25:45
 * @LastEditTime: 2019-09-20 11:12:14
 * @LastEditors: ilovejwl
 */
import axios from '../../src/index';

// document.cookie = 'a=b';

axios.get('/more/get').then(res => {
  console.log(res);
});

// axios
//   .post(
//     'http://127.0.0.1:8088/more/server2',
//     {},
//     {
//       withCredentials: true
//     }
//   )
//   .then(res => {
//     console.log(res);
//   });

const instance = axios.create({
  xsrfCookieName: 'XSRF-TOKEN-D',
  xsrfHeaderName: 'X-XSRF-TOKEN-D'
})

instance.get('/more/get').then(res => {
  console.log(res)
})
