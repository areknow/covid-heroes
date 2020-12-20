import site from "../../site.json";
import "../../styles/index.scss";
import styles from "./index.module.scss";

export const Cause = () => {
  return (
    <div
      id="cause"
      className={styles.section + " " + styles.cause + " " + "page-column"}
    >
      <h2 className="header">{site.content.sections.cause.header}</h2>
      {/* {{#each site.content.sections.cause.paragraphs }
    <p>{{ this }}</p>
  {{/each}} */}
    </div>
  );
};

export default Cause;
