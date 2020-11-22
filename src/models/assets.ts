import {
  deleteAssetsDirectory,
  getAssetsDirectoryList,
  getAssetsFiles,
  postAssetsDirectoryCreate,
} from '@/api/assets';
import { AssetsDirectory } from '@/typings/assets';
import { FileModel } from '@/typings/file';
import { createModel } from '@rematch/core';
import { RootModel } from '.';

/*
 * @Author: jweboy
 * @Date: 2020-11-21 14:54:21
 * @LastEditors: jweboy
 * @LastEditTime: 2020-11-21 23:52:12
 */

export interface AssetsState {
  directories: AssetsDirectory;
  directoryCount: number;
  files: FileModel;
}

export const assets = createModel<RootModel>()({
  state: {
    directories: [],
    directoryCount: 0,
    files: [],
  },
  reducers: {
    syncUpdateDirectories(state, payload) {
      return {
        ...state,
        directories: payload.items,
        directoryCount: payload.total,
      };
    },
    syncUpdateFiles(state, payload) {
      return {
        ...state,
        files: payload.items,
      };
    },
  },
  effects: dispatch => ({
    async asyncGetDirectories() {
      const { data } = await getAssetsDirectoryList();

      dispatch.assets.syncUpdateDirectories(data);
    },
    async asyncDeleteDirectory(payload: AssetsDirectory) {
      await deleteAssetsDirectory({ id: payload.id });
    },
    async asyncCreateDirectory(payload: AssetsDirectory) {
      await postAssetsDirectoryCreate(payload);
    },
    async asyncGetFiles(payload?: FileModel) {
      const { data } = await getAssetsFiles(payload);

      dispatch.assets.syncUpdateFiles(data);
    },
  }),
});
