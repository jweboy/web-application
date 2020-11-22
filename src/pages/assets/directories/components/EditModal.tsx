import { useResetFormOnCloseModal } from '@/hooks/use-modal';
import { RootDispatch } from '@/store';
import { AssetsDirectory } from '@/typings/assets';
import { request } from '@/utils/request';
import { Form, Input, message, Modal } from 'antd';
import React, { FC, forwardRef, useImperativeHandle, useState } from 'react';
import { useDispatch } from 'react-redux';

export interface EditModalProps {
  data: AssetsDirectory;
  onRefresh: () => void;
}

const EditModal: FC<EditModalProps> = forwardRef((props, ref) => {
  const { data } = props;
  const isEdit = +data.id! === -1;
  const title = isEdit ? '编辑' : '新建';
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const dispatch: RootDispatch = useDispatch();

  const onOpen = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onOk = () => {
    form.submit();
  };

  const onFinish = async (values: AssetsDirectory) => {
    await dispatch.assets.asyncCreateDirectory(values);

    message.success('目录新建成功 😁');
    onClose();
    dispatch.assets.asyncGetDirectories();
  };

  useImperativeHandle(ref, () => ({ onOpen, onClose }));

  useResetFormOnCloseModal({ form, visible });

  return (
    <Modal visible={visible} title={`${title}目录名`} onOk={onOk} onCancel={onClose}>
      <Form onFinish={onFinish} form={form}>
        <Form.Item
          name="name"
          label="目录名"
          rules={[{ required: true, message: '请输入目录名称' }]}
        >
          <Input placeholder="请输入目录名称" />
        </Form.Item>
      </Form>
    </Modal>
  );
});

EditModal.displayName = 'EditModal';

EditModal.defaultProps = {
  data: {},
};

export default EditModal;
