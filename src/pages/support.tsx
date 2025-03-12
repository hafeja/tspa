import styles from "../app/page.module.css";
import nextConfig from "../../next.config";
import getGAId from "../components/helper";
import ReactGA from "react-ga4";
import { useEffect } from "react";


export default function Support() {
  ReactGA.initialize(getGAId());
  useEffect(() => { ReactGA.send({ hitType: "pageview", page: window.location.pathname }); }, []);
  return <>
    <div className={styles.ctas}>
      <div className={styles.page}>
        Support
        <a
            className={styles.primary}
            href={`${nextConfig.basePath}`}
            rel="noopener noreferrer"
        >
            Back
        </a>
      </div>
    </div>
  </>
}