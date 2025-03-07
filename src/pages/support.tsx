import styles from "../app/page.module.css";
import nextConfig from "../../next.config";

export default function Support() {
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