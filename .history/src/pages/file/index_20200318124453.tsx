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
      <img src="http://assets.jweboy.com/pet-miniprogram/wx9bf5585b9cac9dbd.o6zAJs2GR8amheA-RJHJZsQCKvFE.1U2XjvRYFMmf569c9a4ac38cda35deb873d83bd54c77.jpg"/>
    </div>
  )
}

export default FileManager
