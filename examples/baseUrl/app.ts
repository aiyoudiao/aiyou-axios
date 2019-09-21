/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-21 16:16:52
 * @LastEditTime: 2019-09-21 16:17:19
 * @LastEditors: ilovejwl
 */

import axios, { AxiosError } from '../../src/index';

const instance = axios.create({
  baseURL: 'https://img.mukewang.com/'
});

instance.get('5cc01a7b0001a33718720632.jpg');

instance.get('https://img.mukewang.com/szimg/5becd5ad0001b89306000338-360-202.jpg');
