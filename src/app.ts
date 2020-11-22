import { createElement } from 'react';
import { Provider } from 'react-redux';
import Root from '.';

/*
 * @Author: jweboy
 * @Date: 2020-11-21 14:59:21
 * @LastEditors: jweboy
 * @LastEditTime: 2020-11-21 15:00:41
 */
export function rootContainer(container) {
  return createElement(Root, null, container);
}
