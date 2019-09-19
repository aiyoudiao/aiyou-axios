/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-19 18:03:07
 * @LastEditTime: 2019-09-19 19:27:24
 * @LastEditors: ilovejwl
 */
import { CancelExecutor, CancelTokenSource, Canceler } from '../types/index';
import Cancel from './Cancel';

interface ResolvePromise {
  (reason?: Cancel): void;
}

/**
 * @description	取消操作的实例类
 * @author ilovejwl
 * @date 2019-09-19
 * @export
 * @class CancleToken
 */
export default class CancelToken {
  promise: Promise<Cancel>;
  reason?: Cancel;

  constructor(executor: CancelExecutor) {
    let resolvePromise: ResolvePromise;

    this.promise = new Promise<Cancel>(resolve => {
      resolvePromise = resolve;
    });

    executor(message => {
      if (this.reason) {
        return;
      }

      this.reason = new Cancel(message);
      resolvePromise(this.reason);
    });
  }

  static source(): CancelTokenSource {
    let cancel!: Canceler;
    const token = new CancelToken(c => {
      cancel = c;
    });

    return {
      cancel,
      token
    };
  }

  throwIfRequested(): void {
    if (this.reason) {
      throw this.reason;
    }
  }
}
