import styles from './index.module.scss';

export const Loader = () => {
  return (
    <div className={styles.pageLoaderCover}>
      <div className={styles.cubeGrid + 'abs-center'}>
        <div className={styles.cube + '' + styles.cube1}></div>
        <div className={styles.cube + '' + styles.cube2}></div>
        <div className={styles.cube + '' + styles.cube3}></div>
        <div className={styles.cube + '' + styles.cube4}></div>
        <div className={styles.cube + '' + styles.cube5}></div>
        <div className={styles.cube + '' + styles.cube6}></div>
        <div className={styles.cube + '' + styles.cube7}></div>
        <div className={styles.cube + '' + styles.cube8}></div>
        <div className={styles.cube + '' + styles.cube9}></div>
      </div>
    </div>
  );
};
