import { ReactElement } from "react";
import styles from "./Content.module.scss";

function Content(): ReactElement {
  return <div className={styles.content}>This is content</div>;
}

export default Content;
