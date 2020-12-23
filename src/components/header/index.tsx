import styles from './index.module.scss';

interface HeaderProps {
  children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  return <h2 className={styles.header}>{props.children}</h2>;
};

export default Header;
