import site from '../../data/site.json';
import '../../styles/index.scss';
import styles from './index.module.scss';
import Column from '../../components/column';
import Section from '../../components/section';
import Header from '../../components/header';

const Need = () => {
  return (
    <Section>
      <Column>
        <div className={styles.need}>
          <Header>{site.content.sections.need.header}</Header>
          <ul className={styles.list}>
            {site.content.sections.need.list.map((item, index) => (
              <li key={index}>{item.label}</li>
            ))}
          </ul>
        </div>
      </Column>
    </Section>
  );
};

export default Need;
