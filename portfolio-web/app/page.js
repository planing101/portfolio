import { Inter } from "next/font/google";
//import Image from "next/image";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.banner}>
      <div className={styles.slider} style={{"--quantity": 5}}>
        <div className={styles.item} style={{"--position": 1}}><img src="images/dot-net_200x200.svg"/></div>
        <div className={styles.item} style={{"--position": 2}}><img src="images/csharp_200x200.svg"/></div>
        <div className={styles.item} style={{"--position": 3}}><img src="images/javascript_200x200.svg"/></div>
        <div className={styles.item} style={{"--position": 4}}><img src="images/sql-server_200x200.svg"/></div>
        <div className={styles.item} style={{"--position": 5}}><img src="images/react_200x200.svg"/></div>
      </div>
      <div className={styles.content}>
        <h1 className={inter.className}>Portfolio</h1>
        <div className={styles.author}>
          <h2 className={inter.className}>Peter Laning</h2>
          <p className={inter.className}><strong>Web Design</strong></p>
        </div>
      </div>
    </div>
  );
}
