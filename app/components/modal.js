import { fetchModelContentByItemId } from '../services/appService';

import styles from './modal.module.css';

export default function Modal({ itemId, isOpen, onClose, children }) {
    if (!isOpen)
        return null;

    const modalModel = fetchModelContentByItemId(itemId);
 
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <button onClick={onClose} className={styles.closeCross}>&times;</button>
                    <h2>{modalModel.title}</h2>
                </div>
                <div className={styles.modalBody}>
                    {modalModel.body}
                </div>
                <div className={styles.modalFooter}>
                    <button onClick={onClose} className={styles.closeButton}>Close</button>
                </div>
            </div>
        </div>
    );
};
