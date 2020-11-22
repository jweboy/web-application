import React, { FC } from 'react';
import styles from './index.less';
import { FileModel } from '@/typings/file';
import { Checkbox, Button, Col, Tooltip } from 'antd';

interface FileCardProps extends FileModel {
  onChange?: (fileName: string, checked: boolean) => void;
}

const FileCard: FC<FileCardProps> = props => {
  function onChange(evt) {
    const { checked } = evt.target;
    const [_, fileName] = (props.name as string).split('/');
    if (typeof props.onChange === 'function') {
      props.onChange(fileName, checked);
    }
  }
  return (
    <div className={styles['file-item']}>
      <div className={styles.action}>
        <Checkbox onChange={onChange} />
      </div>
      <div className={styles.content}>
        <img className={styles.image} src={props.url} />
      </div>
      <Tooltip title={props.md5}>
        <div className={styles.name}>{props.md5}</div>
      </Tooltip>
    </div>
  );
};

export default FileCard;
