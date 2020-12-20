import "../../styles/index.scss";
import styles from "./Hero.module.scss";
import site from "../../site.json";
import Nav from "../../components/nav/Nav";

export const Hero = () => {
  return (
    <div id="hero" className={styles.hero}>
      <div className="page-column">
        <Nav />
        <div className={styles.contentContainer}>
          <div>
            <h1>{site.content.hero.header}</h1>
            <p>{site.content.hero.paragraph}</p>
            <div className={styles.actions}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
