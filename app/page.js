import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.banner}>
      <div className={styles.slider} style={{"--quantity": 8}}>
        <div className={styles.item} style={{"--position": 1}}><img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/dot-net_200x200.svg`}/></div>
        <div className={styles.item} style={{"--position": 2}}><img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/csharp_200x200.svg`}/></div>
        <div className={styles.item} style={{"--position": 3}}><img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/javascript_200x200.svg`}/></div>
        <div className={styles.item} style={{"--position": 4}}><img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/sql-server_200x200.svg`}/></div>
        <div className={styles.item} style={{"--position": 5}}><img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/react_200x200.svg`}/></div>
        <div className={styles.item} style={{"--position": 6}}><img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/css_200x200.svg`}/></div>
        <div className={styles.item} style={{"--position": 7}}><img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/ux-ui_200x200.svg`}/></div>
        <div className={styles.item} style={{"--position": 8}}><a href={`${process.env.NEXT_PUBLIC_BASE_URL}/new`}><img src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/azure-devops_200x200.svg`}/></a></div>
      </div>
      <div className={styles.content}>
        <h1 className={inter.className}>Portfolio</h1>
        <div className={styles.author}>
          <h2 className={inter.className}>Peter Laning</h2>
          <p className={inter.className}><strong>Web Design</strong></p>
        </div>
        <div className={styles.model}></div>
      </div>
    </div>
  );
}
