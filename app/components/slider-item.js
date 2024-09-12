import Image from 'next/image';
import { fetchItemById } from '../services/appService';

import styles from './slider.module.css';

export default function SliderItem({ itemId, openModal, onMouseEnter, onMouseLeave, children }) {
    const baseRoute = process.env.NEXT_PUBLIC_BASE_URL;
    
    const item = fetchItemById(itemId);

    return (
        <div className={styles.item} data-item-id={itemId} style={{"--position": item.pos}} onClick={openModal} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} title="Click me">
            <Image src={`${baseRoute}/images/${item.imageName}`} width={200} height={200} alt={item.alt} unoptimized/>
        </div>
    );
};
