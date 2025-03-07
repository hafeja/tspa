import Image from "next/image";
import styles from "./page.module.css";
import nextConfig from "../../next.config"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src={`${nextConfig.basePath}/next.svg`}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Welcome to <code>this</code> webpage.
          </li>
          <li>Good bye.</li>
        </ol>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href={`${nextConfig.basePath}/support`}
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src={`${nextConfig.basePath}/vercel.svg`}
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Support
          </a>
          <a
            className={styles.secondary}
            href={`${nextConfig.basePath}/about`}
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src={`${nextConfig.basePath}/vercel.svg`}
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            About
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={`${nextConfig.basePath}/file.svg`}
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={`${nextConfig.basePath}/window.svg`}
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={`${nextConfig.basePath}/globe.svg`}
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
