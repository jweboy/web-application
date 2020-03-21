import React, { useEffect } from 'react'
import { Button } from 'antd'

const FileManager = () => {
  useEffect(() => {
    console.log('object');
  }, []);

  return (
    <div>
      FilePage
      <Button type="primary">click me</Button>
    </div>
  )
}

export default FileManager
