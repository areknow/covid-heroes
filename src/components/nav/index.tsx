import styles from './index.module.scss';
import '../../styles/index.scss';
import site from '../../data/site.json';

const Nav = () => {
  return (
    <nav>
      <div className="page-column">
        <ul className={styles.menu}>
          <li>{site.title}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
