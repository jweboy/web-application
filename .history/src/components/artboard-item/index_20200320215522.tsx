import React, { FC } from 'react'
import styles from './index.less';
import { FileModel } from '@/typings/file';

const ArtBoardItem: FC<FileModel> = (props) => {
  return (
    <div className={styles['ardboard-item']}>
      <div className={styles.content}>
        <img className={styles.image} src={props.url} />
      </div>
      <div className={styles.title}>
        <span className={styles.name}>{props.key}</span>
      </div>
    </div>
  )
}

export default ArtBoardItem
