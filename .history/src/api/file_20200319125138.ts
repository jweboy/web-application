import { request } from '@/utils/request';

export function getFiles() {
  return request({
    method: 'GET',
    url: '/files'
  })
}
