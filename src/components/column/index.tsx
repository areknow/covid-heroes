import React from 'react';
import styles from './index.module.scss';

interface ColumnProps {
  children: React.ReactNode;
}

const Column = (props: ColumnProps) => {
  return <div className={styles.column}>{props.children}</div>;
};

export default Column;
