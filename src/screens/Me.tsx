import { ReactElement } from "react";
import Header from "../components/header";
import styles from "./Me.module.scss";
import Content from "../components/content/Content";

function Me(): ReactElement {
  return (
    <div className={styles.me}>
      {/* <div>Hi</div> */}
      <Header />
      <div className={styles.my}>
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  );
}

export default Me;
