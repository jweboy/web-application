import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import ArtBoardItem from '@/components/artboard-item';
import styles from './index.less';
import { getFiles } from '@/api/file';
import { FileModel } from '@/typings/file';

const initialFiles: FileModel[] = [];

const FileManager = () => {
  const [files, setFiles] = useState(initialFiles);
  useEffect(() => {
    getFiles().then(({ data }) => {
      console.log(data);
      setFiles(data.items)
    });
  }, []);

  return (
    <div className={styles['artboard-container']}>
      {
        files.map((file) => (
          <ArtBoardItem key={file.hash} {...file}/>
        ))
      }
    </div>
  )
}

export default FileManager
