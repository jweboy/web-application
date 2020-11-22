import { Upload } from 'antd';
import React, { FC, useMemo } from 'react';
import { action } from '../FileCard/index.less';

export interface FileUploaderProps {
  namespace?: string;
}

const FileUploader: FC<FileUploaderProps> = props => {
  // TODO: process.env.API
  const action = 'http://localhost:4001/api/pet' + '/assets/file/upload';
  const data = useMemo(() => {
    return { key: props.namespace };
  }, [props.namespace]);

  return (
    <Upload showUploadList={false} action={action} data={data}>
      {props.children}
    </Upload>
  );
};

export default FileUploader;
