import styles from "./index.module.scss";

interface ButtonProps {
  negative?: boolean;
  children: {
    label: string;
    type: string;
    key: string;
  };
}

export const Button = (props: ButtonProps) => {
  let classes = [
    styles.button,
    styles[props.children.type],
    props.negative ? styles.negative : null,
  ].join(" ");

  return <button className={classes}>{props.children.label}</button>;
};

export default Button;
