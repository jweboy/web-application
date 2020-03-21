import { request } from '@/utils/request';
import { FileModel } from '@/typings/file';
import { List } from '@/typings/list';

export function getFiles() {
  return request<List<FileModel[]>>({
    method: 'GET',
    url: '/files'
  })
}
