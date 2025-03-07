import styles from "../app/page.module.css";
import nextConfig from "../../next.config";

export default function About() {
  return <div className={styles.ctas}>
    <div className={styles.page}>
      About
      <a
        className={styles.primary}
        href={`${nextConfig.basePath}`}
        rel="noopener noreferrer"
      >
        Back
      </a>
    </div>
  </div>
}