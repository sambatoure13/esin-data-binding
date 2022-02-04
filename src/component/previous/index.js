import styles from "./index.module.css";

export function Previous(props) {
  const { onPreviousClick } = props;

  return (
    <button className={styles.button} type="button" onClick={onPreviousClick}>
      Previous
    </button>
  );
}
