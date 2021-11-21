import { ReactElement } from "react";
import Header from "../components/header";
import styles from "./Me.module.scss";
import Content from "../components/content/Content";

function Me(): ReactElement {
  return (
    <div className={styles.me}>
      <Header />
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
  );
}

export default Me;
