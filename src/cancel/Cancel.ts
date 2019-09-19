/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-19 18:51:27
 * @LastEditTime: 2019-09-19 18:54:54
 * @LastEditors: ilovejwl
 */
import { Cancel as ICancel } from '../types/index';

export default class Cancel implements ICancel {
  message?: string;

  constructor(message?: string) {
    this.message = message;
  }
}

export function isCancel(value: any): boolean {
  return value instanceof Cancel;
}
