import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import ArtBoardItem from '@/components/artboard-item';
import styles from './index.less';
import { getFiles } from '@/api/file';

const initialFiles = [];

const FileManager = () => {
  const [files, setFiles] = useState(initialFiles);
  useEffect(() => {
    getFiles().then(({ data }) => {
      console.log(data);
      // setFiles()
    });
  }, []);

  return (
    <div className={styles['artboard-container']}>
      <ArtBoardItem />
      <ArtBoardItem />
    </div>
  )
}

export default FileManager
