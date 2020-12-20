import styles from './index.module.scss';
import site from '../../data/site.json';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={'page-column ' + styles.pageColumn}>
        <h4>{site.title}</h4>
        <div className={styles.linkGroups}>
          <div>
            <h4>{site.content.footer.learn.header}</h4>
            <ul>
              {site.content.footer.learn.links.map((link, index) => (
                <li key={index}>
                  <a href={link.link} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{site.content.footer.about.header}</h4>
            <ul>
              {site.content.footer.about.links.map((link, index) => (
                <li key={index}>
                  <a href={link.link} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
