import site from '../../data/site.json';
import styles from './index.module.scss';

const Nav = () => {
  return (
    <nav>
      <ul className={styles.menu}>
        <li>{site.title}</li>
      </ul>
    </nav>
  );
};

export default Nav;
