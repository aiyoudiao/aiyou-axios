/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-18 17:17:03
 * @LastEditTime: 2019-09-18 18:30:07
 * @LastEditors: ilovejwl
 */
import axios from '../../src/index';

// axios({
//   url: '/extend/post',
//   method: 'post',
//   data: {
//     msg: 'hi'
//   }
// });

// axios.request({
//   url: '/extend/post',
//   method: 'post',
//   data: {
//     msg: 'hello'
//   }
// });

interface ResponseData<T = any> {
  code: number;
  result: T;
  message: string;
}

interface User {
  name: string;
  age: number;
}

function getUser<T>() {
  return axios<ResponseData<T>>('/extend/user')
    .then(res => res.data)
    .catch(err => console.error(err));
}

async function test() {
  const user = await getUser<User>();
  if (user) {
    console.log(user.result.name);
  }
}

test();

// axios.get('/extend/get');

// axios.options('/extend/options');

// axios.delete('/extend/delete');

// axios.head('/extend/head');

// axios.post('/extend/post', { msg: 'post' });

// axios.put('/extend/put', { msg: 'put' });

// axios.patch('/extend/patch', { msg: 'patch' });
