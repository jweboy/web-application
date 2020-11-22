/*
 * @Author: jweboy
 * @Date: 2020-03-21 23:15:41
 * @LastEditors: jweboy
 * @LastEditTime: 2020-03-22 23:21:16
 */
import { request } from '@/utils/request';
import { FileModel, FileParams } from '@/typings/file';
import { List } from '@/typings/list';

export function getFiles(params: FileParams) {
  return request<List<FileModel[]>>({
    method: 'GET',
    url: '/files',
    params,
  });
}

export function deleteFiles(params: FileParams) {
  return request<List<FileModel[]>>({
    method: 'DELETE',
    url: '/file/multiple-delete',
    data: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}
