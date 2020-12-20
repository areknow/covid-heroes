import site from "../../site.json";
import "../../styles/index.scss";
import styles from "./index.module.scss";

export const Cause = () => {
  return (
    <div id="cause" className={"section " + styles.cause + " page-column "}>
      <h2 className="header">{site.content.sections.cause.header}</h2>
      {site.content.sections.cause.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Cause;
