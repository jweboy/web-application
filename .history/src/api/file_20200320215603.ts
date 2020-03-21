import { request } from '@/utils/request';
import { FileModel } from '@/typings/file';

export function getFiles() {
  return request<FileModel[]>({
    method: 'GET',
    url: '/files'
  })
}
