import styles from './index.module.scss';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  autoComplete: string;
  name: string;
  label: string;
}

const Select = (props: SelectProps) => {
  return (
    <div className={styles.selectContainer}>
      <select
        className={styles.select}
        defaultValue={'N/A'}
        autoComplete={props.autoComplete}
        name={props.name}
      >
        <option value="N/A" disabled>
          {props.label}
        </option>
        {props.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
