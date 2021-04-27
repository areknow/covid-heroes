import { Button, VariantType } from '@miniml/alpha-components-react/button';
import Column from 'components/column';
import Nav from 'components/nav';
import { useAppContext } from 'context';
import site from 'data/site.json';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styles from './index.module.scss';

const SCROLL_OFFSET = 50;

const Hero = () => {
  const { updateContext } = useAppContext();

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
                  <AnchorLink href="#donate" offset={SCROLL_OFFSET}>
                    <Button
                      monochrome
                      size="large"
                      variant={action.type as VariantType}
                      onClick={() => buttonClick(action.key)}
                    >
                      {action.label}
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
