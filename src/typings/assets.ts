/*
 * @Author: jweboy
 * @Date: 2020-11-08 23:58:02
 * @LastEditors: jweboy
 * @LastEditTime: 2020-11-08 23:58:55
 */
export interface IAssetsDirectoryModel {
  id: string;
  name: string;
}

export type AssetsDirectory = Partial<IAssetsDirectoryModel>;
