import Column from '../../../../components/column';
import Header from '../../../../components/header';
import Section from '../../../../components/section';
import site from '../../../../data/site.json';
import styles from './index.module.scss';

const Contact = () => {
  return (
    <Section>
      <Column>
        <div className={styles.contact}>
          <Header>{site.content.sections.contact.header}</Header>
          <ul>
            {site.content.sections.contact.list.map((item, index) => (
              <li key={index}>
                <span>{item.type}: </span>
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </Column>
    </Section>
  );
};

export default Contact;
