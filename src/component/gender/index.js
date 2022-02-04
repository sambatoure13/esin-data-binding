import male from "../../assets/images/male.png";
import female from "../../assets/images/female.png";

import styles from "./index.module.css";

export function Gender(props) {
  const { gender } = props;
  const unknownGender = "unknown";

  if (gender === "male") {
    return <img className={styles.gender} src={male} alt={gender} />;
  } else if (gender === "female") {
    return <img className={styles.gender} src={female} alt={gender} />;
  }
  return unknownGender;
}
