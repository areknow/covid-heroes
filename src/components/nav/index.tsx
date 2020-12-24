import site from '../../data/site.json';
import '../../styles/index.scss';
import styles from './index.module.scss';

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
