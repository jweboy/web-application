/*
 * @Author: jweboy
 * @Date: 2020-11-21 14:58:48
 * @LastEditors: jweboy
 * @LastEditTime: 2020-11-21 15:05:14
 */
import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import { models, RootModel } from './models';

export const store = init({
  models,
});

export type Store = typeof store;
export type RootDispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
