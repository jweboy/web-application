/*
 * @Author: jweboy
 * @Date: 2020-03-21 23:15:41
 * @LastEditors: jweboy
 * @LastEditTime: 2020-03-23 23:02:24
 */
export interface FileModel {
  key?: string;
  hash?: string;
  fsize?: number;
  mimeType?: string;
  putTime?: number;
  type?: number;
  status?: number;
  md5?: string;
  url?: string;
  name?: string;
}

export interface FileParams {
  prefix?: string;
  limit?: number;
  fileName?: string;
  key?: string;
  names?: string[];
}
