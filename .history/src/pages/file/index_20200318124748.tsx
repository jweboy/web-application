import React, { useEffect } from 'react'
import { Button } from 'antd'
import { request } from '../../utils/request';
import ArtBoardItem from '@/components/artboard-item';

const FileManager = () => {
  useEffect(() => {
    // request('/posts')
  }, []);

  return (
    <div>
      FilePage
      <Button type="primary">click me</Button>
      <ArtBoardItem />
    </div>
  )
}

export default FileManager
