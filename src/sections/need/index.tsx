import site from "../../site.json";
import "../../styles/index.scss";
import styles from "./index.module.scss";

export const Need = () => {
  return (
    <div className={"section " + styles.need + " page-column"}>
      <h2 className="header">{site.content.sections.need.header}</h2>
      <ul className={styles.list}>
        {site.content.sections.need.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Need;
