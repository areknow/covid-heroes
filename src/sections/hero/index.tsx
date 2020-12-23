import '../../styles/index.scss';
import styles from './index.module.scss';
import site from '../../data/site.json';
import Nav from '../../components/nav';
import Button from '../../components/button';
import Column from '../../components/column';

const Hero = () => {
  return (
    <div id="hero" className={styles.hero}>
      <Column>
        <Nav />
        <div className={styles.contentContainer}>
          <div>
            <h1>{site.content.hero.header}</h1>
            <p>{site.content.hero.paragraph}</p>
            <div className={styles.actions}>
              {site.content.hero.actions.map((action, index) => (
                <Button key={index} negative>
                  {action}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Column>
    </div>
  );
};

export default Hero;
