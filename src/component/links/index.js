import { useState } from "react";
import styles from "./index.module.css";

export function Links(props) {
  const [isMenuVisible, setIsMeneVisible] = useState(false);
  const { links } = props;

  if (!links || !Array.isArray(links) || links.length <= 0) {
    return <></>;
  }

  const mouseEnterMenu = () => setIsMeneVisible(true);
  const mouseLeaveMenu = () => setIsMeneVisible(false);

  return (
    <div
      className={styles.links}
      onMouseEnter={mouseEnterMenu}
      onMouseLeave={mouseLeaveMenu}
    >
      Menu
      <div className={styles.menu}>
        {isMenuVisible &&
          links.map((link, index) => (
            <a key={index} href={links}>
              {links}
            </a>
          ))}
      </div>
    </div>
  );
}
