import styles from './index.module.scss';

interface ButtonProps {
  negative?: boolean;
  disabled?: boolean;
  children: {
    label: string;
    type: string;
  };
  change?: () => void;
}

const Button = (props: ButtonProps) => {
  let classes = [
    styles.button,
    styles[props.children.type],
    props.negative ? styles.negative : undefined
  ].join(' ');

  return (
    <button
      className={classes}
      onClick={props.change}
      type="button"
      disabled={props.disabled}
    >
      {props.children.label}
    </button>
  );
};

export default Button;
