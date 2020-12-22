import site from '../../data/site.json';
import '../../styles/index.scss';
import styles from './index.module.scss';
import PageColumn from '../../components/page-column';

const Need = () => {
  return (
    <PageColumn>
      <div className={'section ' + styles.need}>
        <h2 className="header">{site.content.sections.need.header}</h2>
        <ul className={styles.list}>
          {site.content.sections.need.list.map((item, index) => (
            <li key={index}>{item.label}</li>
          ))}
        </ul>
      </div>
    </PageColumn>
  );
};

export default Need;
