import styles from "./helpingHand.module.css"

export default function HelpingHand({ children }) {
    return (
        <div className={styles.hintHandContainer}>
            <div className={styles.hintHand}></div>
        </div>
    );
};
