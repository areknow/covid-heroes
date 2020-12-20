import styles from './index.module.scss';
import site from '../../data/site.json';

export const Contact = () => {
  return (
    <div className={'section ' + styles.contact + ' page-column'}>
      <h2 className="header">{site.content.sections.contact.header}</h2>
      <ul>
        {site.content.sections.contact.list.map((item, index) => (
          <li key={index}>
            <span>{item.type}: </span>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
