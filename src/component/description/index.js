import styles from "./index.module.css";

export function Description(props) {
  const { description } = props;

  return <div className={styles.padding}>{description}</div>;
}
