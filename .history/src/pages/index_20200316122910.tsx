import React from 'react';
import styles from './index.less';
import FilePage from './file';
import BkLayout from '@/components/layouts';

export default () => {
  return (
    <BkLayout>
      {/* <FilePage /> */}
      <h1 className={styles.title}>Page index</h1>
    </BkLayout>
  );
}
