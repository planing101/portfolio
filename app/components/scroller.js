import styles from './scroller.module.css';

export default function Scroller({ children }) {
    return (
        <div className={styles.marquee}>
            <div className={styles.item}>
                {children}
            </div>
        </div>
    );
};
