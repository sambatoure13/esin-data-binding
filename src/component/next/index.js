import styles from "./index.module.css";

export function Next(props) {
  const { onNextClick } = props;

  return (
    <button className={styles.button} type="button" onClick={onNextClick}>
      Next
    </button>
  );
}
