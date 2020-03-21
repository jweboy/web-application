import { request } from '@/utils/request';

export function getFiles() {
  return request.get('/files')
}
