import '../../styles/index.scss';
import styles from './index.module.scss';
import site from '../../data/site.json';
import Nav from '../../components/nav';
import Button from '../../components/button';
import Column from '../../components/column';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useContext } from 'react';
import { Context } from '../../context';

const Hero = () => {
  const { updateContext } = useContext(Context);

  const buttonClick = (key: string) => {
    updateContext({ formType: key });
  };

  return (
    <div className={styles.hero}>
      <Column>
        <Nav />
        <div className={styles.content}>
          <div>
            <h1>{site.content.hero.header}</h1>
            <p>{site.content.hero.paragraph}</p>
            <div className={styles.actions}>
              {site.content.hero.actions.map((action, index) => (
                <div key={index} className={styles.button}>
                  <AnchorLink href="#donate" offset="50">
                    <Button negative change={() => buttonClick(action.key)}>
                      {action}
                    </Button>
                  </AnchorLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Column>
    </div>
  );
};

export default Hero;
