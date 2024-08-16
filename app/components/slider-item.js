import Image from 'next/image';

import styles from './slider.module.css';

export default function SliderItem({ pos, imageName, openModal, children }) {
    const baseRoute = process.env.NEXT_PUBLIC_BASE_URL;
    
    return (
        <div className={styles.item} style={{"--position": pos}} onClick={openModal} title="Click me">
            <Image src={`${baseRoute}/images/${imageName}`} width={200} height={200} alt={imageName}/>
        </div>
    );
};
