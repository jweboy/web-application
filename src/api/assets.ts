/*
 * @Author: jweboy
 * @Date: 2020-11-08 23:26:41
 * @LastEditors: jweboy
 * @LastEditTime: 2020-11-21 23:58:14
 */
import { AssetsDirectory } from '@/typings/assets';
import { FileModel, FileParams } from '@/typings/file';
import { List } from '@/typings/list';
import { request } from '@/utils/request';

export const getAssetsDirectoryList = () => {
  return request({
    url: '/assets/directory/list',
    method: 'GET',
  });
};

export const postAssetsDirectoryCreate = (data: AssetsDirectory) => {
  return request({
    method: 'POST',
    url: '/assets/directory/create',
    data,
  });
};

export const deleteAssetsDirectory = (data: AssetsDirectory) => {
  return request({
    method: 'delete',
    url: '/assets/directory/delete',
    data,
  });
};

export function getAssetsFiles(params?: FileParams) {
  return request<List<FileModel[]>>({
    method: 'GET',
    url: '/assets/files',
    params,
  });
}

export function postUploadAssetsFiles(file?: File) {
  return request<List<FileModel[]>>({
    method: 'POST',
    url: '/assets/file/upload',
    params: file,
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
}
