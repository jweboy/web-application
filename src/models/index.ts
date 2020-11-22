/*
 * @Author: jweboy
 * @Date: 2020-11-21 14:56:09
 * @LastEditors: jweboy
 * @LastEditTime: 2020-11-21 14:56:41
 */

import { Models } from '@rematch/core';
import { assets } from './assets';

export interface RootModel extends Models<RootModel> {
  assets: typeof assets;
}

export const models: RootModel = { assets };
