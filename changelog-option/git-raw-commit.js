/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-10-12 15:33:23
 * @LastEditTime: 2019-10-12 15:33:23
 * @LastEditors: ilovejwl
 */
'use strict';
const Q = require (`q`);
const conventionalChangelog = require (`./conventional-changelog`);
const parserOpts = require (`./parser-opts`);
const recommendedBumpOpts = require (`./conventional-recommended-bump`);
const writerOpts = require (`./writer-opts`);
// 格式化 git log 信息
const gitRawCommitsOpts = require ('./git-raw-commit');

module.exports = Q.all ([
  conventionalChangelog,
  parserOpts,
  recommendedBumpOpts,
  writerOpts,
  gitRawCommitsOpts,
]).spread (
  (
    conventionalChangelog,
    parserOpts,
    recommendedBumpOpts,
    writerOpts,
    gitRawCommitsOpts
  ) => {
    return {
      conventionalChangelog,
      parserOpts,
      recommendedBumpOpts,
      writerOpts,
      gitRawCommitsOpts, // 传入
    };
  }
);
