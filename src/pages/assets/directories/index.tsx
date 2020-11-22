import { request } from '@/utils/request';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Col, message, Row, Space, Table, Tooltip } from 'antd';
import { useRequest } from '@/hooks/use-request';
import { getAssetsDirectoryList } from '@/api/assets';
import { AssetsDirectory } from '@/typings/assets';
import { CloseCircleFilled, CloseCircleOutlined, FolderTwoTone } from '@ant-design/icons';
import styles from './index.less';
import EditModal, { EditModalProps } from './components/EditModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '@/store';
import Files from '../files';

const Directories = () => {
  const modalRef = useRef(null);
  const dispatch: RootDispatch = useDispatch();
  const { directories } = useSelector((state: RootState) => state.assets);
  const [currRecord, setCurrRecord] = useState<AssetsDirectory>({});

  // 新建目录
  const onAddItem = () => {
    // @ts-ignore
    modalRef.current.onOpen();
  };

  // 删除目录
  const onDeleteItem = (record: AssetsDirectory) => async (evt: MouseEvent) => {
    evt.stopPropagation();
    await dispatch.assets.asyncDeleteDirectory(record);

    message.success('删除成功');
    dispatch.assets.asyncGetDirectories();
  };

  // 点击目录
  const onItemClick = (record: AssetsDirectory) => () => {
    setCurrRecord(record);
  };

  useEffect(() => {
    dispatch.assets.asyncGetDirectories();
  }, []);

  return currRecord ? (
    <Files />
  ) : (
    <Card>
      <Space direction="vertical" className={styles.main} size="large">
        <Button type="primary" onClick={onAddItem}>
          新增
        </Button>
        <Row>
          {directories.map(item => (
            <Col span={2} key={item.id} className={styles.items} onClick={onItemClick(item)}>
              <CloseCircleFilled className={styles['delete-btn']} onClick={onDeleteItem(item)} />
              <Space direction="vertical" size={0} className={styles.item}>
                <FolderTwoTone className={styles.icon} />
                <Tooltip title={item.name}>
                  <div className={styles.name}>{item.name}</div>
                </Tooltip>
              </Space>
            </Col>
          ))}
        </Row>
      </Space>
      <EditModal ref={modalRef} />
      {/* <Table columns={columns} dataSource={data} /> */}
    </Card>
  );
};

export default Directories;
