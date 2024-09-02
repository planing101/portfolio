import styles from './slider.module.css';

export default function SliderItem({ qty, children }) {
    return (
        <div id="Slider" className={styles.slider} style={{"--quantity": qty}}>
            {children}
        </div>
    );
};
