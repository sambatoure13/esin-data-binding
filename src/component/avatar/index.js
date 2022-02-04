import styles from "./index.module.css";

export function Avatar(props) {
  const { url } = props;

  return (
    <div className={styles.actions}>
      <img className={styles.img} src={url} alt="" />
    </div>
  );
}
