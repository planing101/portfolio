import SliderItem from "./slider-item";

import styles from './slider.module.css';

export default function Slider({ openModal }) {
    return (
        <div id="Slider" className={styles.slider} style={{ "--quantity": 9 }}>
            <SliderItem itemId={1} openModal={openModal} />
            <SliderItem itemId={2} openModal={openModal} />
            <SliderItem itemId={3} openModal={openModal} />
            <SliderItem itemId={4} openModal={openModal} />
            <SliderItem itemId={5} openModal={openModal} />
            <SliderItem itemId={6} openModal={openModal} />
            <SliderItem itemId={7} openModal={openModal} />
            <SliderItem itemId={8} openModal={openModal} />
            <SliderItem itemId={9} openModal={openModal} />
        </div>
    );
};
