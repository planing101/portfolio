//import React from 'react';

import styles from './modal.module.css';

export default function Modal({ title, isOpen, onClose, children }) {
    if (!isOpen)
        return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <button onClick={onClose} className={styles.closeCross}>&times;</button>
                    <h2>{title}</h2>
                </div>
                <div className={styles.modalBody}>
                    {children}
                </div>
                <div className={styles.modalFooter}>
                    <button onClick={onClose} className={styles.closeButton}>Close</button>
                </div>
            </div>
        </div>
    );
};
