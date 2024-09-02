'use client'

import { Inter } from "next/font/google";
// import HelpingHand from "./components/helpingHand"
import Slider from "./components/slider";
import SliderItem from "./components/slider-item";
import Modal from './components/modal';
import React, { useState } from 'react';

import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [itemId, setItemId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const openModal = (e) => {
    setItemId(parseInt(e.currentTarget.dataset.itemId));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.banner}>
        <Slider qty={9}>
          <SliderItem itemId={1} openModal={openModal}/>
          <SliderItem itemId={2} openModal={openModal}/>
          <SliderItem itemId={3} openModal={openModal}/>
          <SliderItem itemId={4} openModal={openModal}/>
          <SliderItem itemId={5} openModal={openModal}/>
          <SliderItem itemId={6} openModal={openModal}/>
          <SliderItem itemId={7} openModal={openModal}/>
          <SliderItem itemId={8} openModal={openModal}/>
          <SliderItem itemId={9} openModal={openModal}/>
        </Slider>
        {/* <div className={styles.hintHand}></div> */}
        <div className={styles.content}>
          <h1 className={inter.className}>Portfolio</h1>
          <div className={styles.author}>
            <h2 className={inter.className}>Peter Laning</h2>
            <p className={inter.className}><strong>Web Design</strong></p>
          </div>
          <div className={styles.model}></div>
        </div>
      </div>
      {/* <HelpingHand/> */}
      <Modal itemId={itemId} isOpen={isModalOpen} onClose={closeModal}/>
    </>
  );
}
