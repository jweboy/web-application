import React, { useEffect } from 'react'
import { Button } from 'antd'
import { request } from '../../utils/request';

const FileManager = () => {
  useEffect(() => {
    // request('/posts')
  }, []);

  return (
    <div>
      FilePage
      <Button type="primary">click me</Button>
    </div>
  )
}

export default FileManager
