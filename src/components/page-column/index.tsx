import React from 'react';
import styles from './index.module.scss';

const PageColumn = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.pageColumn}>{children}</div>;
};

export default PageColumn;
