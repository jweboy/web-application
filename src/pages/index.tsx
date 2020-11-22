import React from 'react';
import styles from './index.less';
import FilePage from './file';
import BkLayout from '@/components/layouts';
import Directories from './assets/directories';

const Assets = () => {
  return (
    <BkLayout>
      <Directories />
    </BkLayout>
  );
};

export default Assets;
