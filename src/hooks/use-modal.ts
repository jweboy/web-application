/*
 * @Author: jweboy
 * @Date: 2020-11-21 15:37:35
 * @LastEditors: jweboy
 * @LastEditTime: 2020-11-21 15:38:26
 */
import { FormInstance } from 'antd/lib/form';
import { useRef, useEffect } from 'react';

export const useResetFormOnCloseModal = ({
  form,
  visible,
}: {
  form: FormInstance;
  visible: boolean;
}) => {
  const prevVisibleRef = useRef<boolean>(false);
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;

  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [visible]);
};
