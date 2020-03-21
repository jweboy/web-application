import React, { useEffect } from 'react'
import { Button } from 'antd'
import { request } from '../../utils/request';
import ArtBoardItem from '@/components/artboard-item';
import styles from './index.less';
import { getFiles } from '@/api/file';

const FileManager = () => {
  useEffect(() => {
    getFiles();
  }, []);

  return (
    <div className={styles['artboard-container']}>
      <ArtBoardItem />
      <ArtBoardItem />
    </div>
  )
}

export default FileManager
