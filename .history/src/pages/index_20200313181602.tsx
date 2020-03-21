import React from 'react';
import styles from './index.less';
import FilePage from './file';

export default () => {
  return (
    <div>
      <FilePage />
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
