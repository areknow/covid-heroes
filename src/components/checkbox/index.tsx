import styles from './index.module.scss';

interface CheckboxProps {
  label: string;
  value: string;
  change: () => void;
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        value={props.value}
        onChange={() => props.change()}
      />
      <span className={styles.checkbox}></span>
      <div className={styles.label}>{props.label}</div>
    </label>
  );
};

export default Checkbox;
