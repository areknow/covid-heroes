import styles from './index.module.scss';

interface SectionProps {
  children: React.ReactNode;
}

const Section = (props: SectionProps) => {
  return <div className={styles.section}>{props.children}</div>;
};

export default Section;
