import site from '../../data/site.json';
import '../../styles/index.scss';
import styles from './index.module.scss';
import Column from '../../components/column';
import Section from '../../components/section';
import Header from '../../components/header';

const Cause = () => {
  return (
    <Section>
      <Column>
        <div className={styles.cause}>
          <Header>{site.content.sections.cause.header}</Header>
          {site.content.sections.cause.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Column>
    </Section>
  );
};

export default Cause;
