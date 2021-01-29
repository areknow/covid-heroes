import Column from 'components/column';
import Header from 'components/header';
import Section from 'components/section';
import site from 'data/site.json';
import styles from './index.module.scss';

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
