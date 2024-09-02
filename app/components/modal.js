import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify'; // For sanitizing HTML
import { fetchModelContentByItemId } from '../services/appService';

import styles from './modal.module.css';

export default function Modal({ itemId, isOpen, onClose, children }) {
    const [modalModel, setModalModel] = useState({ title: "", body: [""] });
    
    useEffect(() => {
        if (!isOpen) {
            return;
        }
    
        const data = fetchModelContentByItemId(itemId);

        setModalModel(data);

    }, [itemId, isOpen]);

    if (!isOpen)
        return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <button onClick={onClose} className={styles.closeCross}>&times;</button>
                    <h2>{modalModel.title}</h2>
                </div>
                <div className={styles.modalBody}>
                    {modalModel.body.map((text, index) => (
                        <p key={index} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }} />
                    ))}
                </div>
                <div className={styles.modalFooter}>
                    <button onClick={onClose} className={styles.closeButton}>Close</button>
                </div>
            </div>
        </div>
    );
};
