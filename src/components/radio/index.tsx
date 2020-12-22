import styles from './index.module.scss';

interface RadioProps {
  label: string;
  group: string;
  change: () => void;
}

const Radio = (props: RadioProps) => {
  return (
    <label className={styles.radioContainer}>
      <input type="radio" name={props.group} onChange={props.change} />
      <span className={styles.radio}></span>
      <div className={styles.label}>{props.label}</div>
    </label>
  );
};

export default Radio;
