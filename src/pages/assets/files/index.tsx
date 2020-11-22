import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Layout, message, Modal, Row, Space } from 'antd';
import FileCard from '@/components/FileCard';
import styles from './index.less';
import { getFiles, deleteFiles } from '@/api/file';
import { FileModel } from '@/typings/file';
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '@/store';
import FileUploader from '@/components/FileUploader';

const FILE_PREFIX = 'pet-miniprogram';
const initialFiles: FileModel[] = [];
const initialFileNames: string[] = [];
const fileNameMap = new Set();

const Files = () => {
  const [fileNames, setFileNames] = useState(initialFileNames);
  const dispatch: RootDispatch = useDispatch();
  const { files } = useSelector((state: RootState) => state.assets);
  let namespace = '/blog';

  function onCancel() {
    setFileNames([]);
    fileNameMap.clear();
  }

  function onChange(fileName: string, checked: boolean) {
    if (checked) {
      fileNameMap.add(fileName);
    } else {
      fileNameMap.delete(fileName);
    }

    const values = [...fileNameMap.values()];
    setFileNames(values);
  }

  function deleteFile() {
    if (fileNames.length === 0) {
      message.error('至少选择一张图片');
      return;
    }

    Modal.confirm({
      title: '',
      content: '确定要删除吗？',
      onOk: asyncDeleteFiles,
    });
  }

  function asyncDeleteFiles() {
    return deleteFiles({
      prefix: FILE_PREFIX,
      names: fileNames,
    }).then(() => {
      message.success('删除成功');
      setFileNames([]);
      fileNameMap.clear();
    });
  }

  useEffect(() => {
    dispatch.assets.asyncGetFiles({ prefix: 'pet-miniprogram' });
  }, []);

  return (
    <div className={styles.files}>
      <Layout.Header className={styles.header}>
        <Space>
          <FileUploader namespace="pet-miniprogram">
            <Button type="primary">上传</Button>
          </FileUploader>
        </Space>
        <Space>
          {/* <Button disabled>取消</Button> */}
          <Checkbox>全选</Checkbox>
          <span>已选择{fileNames.length}张图片</span>
          <Button danger onClick={deleteFile} disabled>
            删除
          </Button>
        </Space>
      </Layout.Header>
      <Row className={styles.main}>
        {files.map(file => (
          <FileCard key={file.hash} {...file} onChange={onChange} />
        ))}
      </Row>
    </div>
  );
};

export default Files;
