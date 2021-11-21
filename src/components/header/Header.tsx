import { ReactElement } from "react";
import useScrollScale from "../../hooks/useScrollScale";
import styles from "./Header.module.scss";
function Header(): ReactElement {
  const { scrollingDown } = useScrollScale();
  return (
    <header className={styles.header}>
      <div
        className={
          scrollingDown ? styles.headerContentScrolled : styles.headerContent
        }
      >
        <p>Hi I'm Jonny</p>
        <a href="https://github.com/jonnyacl" rel="noreferrer" target="_blank">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jonathan-lea-2270a981/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
            alt="linkedIn"
          />
        </a>
        <a
          href="https://lichess.org/@/lejonbrames"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://images.prismic.io/lichess/5cfd2630-2a8f-4fa9-8f78-04c2d9f0e5fe_lichess-box-1024.png?auto=compress,format"
            alt="lichess"
          />
        </a>
        <a
          href="https://www.strava.com/athletes/6034792"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://d3nn82uaxijpm6.cloudfront.net/assets/activities/icon-ios-app-fdd1ed3da3ce334990af99517dc8f735832f6e5a3bb97feff3abdbd091caffba.svg"
            alt="strava"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
