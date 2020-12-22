import site from '../../data/site.json';
import '../../styles/index.scss';
import styles from './index.module.scss';
import PageColumn from '../../components/page-column';

const Cause = () => {
  return (
    <PageColumn>
      <div className={'section ' + styles.cause}>
        <h2 className="header">{site.content.sections.cause.header}</h2>
        {site.content.sections.cause.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </PageColumn>
  );
};

export default Cause;
