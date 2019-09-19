/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-19 19:32:18
 * @LastEditTime: 2019-09-19 19:37:29
 * @LastEditors: ilovejwl
 */
import axios, { Canceler } from '../../src/index';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios
  .get('/cancel/get', {
    cancelToken: source.token
  })
  .catch(function(e) {
    if (axios.isCancel(e)) {
      console.log('Request canceled', e.message);
    }
  });

setTimeout(() => {
  source.cancel('Operation canceled by the user.');

  axios.post('/cancel/post', { a: 1 }, { cancelToken: source.token }).catch(function(e) {
    if (axios.isCancel(e)) {
      console.log(e.message);
    }
  });
}, 100);

let cancel: Canceler;

axios
  .get('/cancel/get', {
    cancelToken: new CancelToken(c => {
      cancel = c;
    })
  })
  .catch(function(e) {
    if (axios.isCancel(e)) {
      console.log('Request canceled');
    }
  });

setTimeout(() => {
  cancel();
}, 200);
