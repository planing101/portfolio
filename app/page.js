'use client'

import { Inter } from "next/font/google";
import HelpingHand from "./components/helpingHand"
import Scroller from "./components/scroller"
import Slider from "./components/slider";
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
        <Slider openModal={openModal}/>
        <div className={styles.content}>
          <h1 className={inter.className}>Portfolio</h1>
          {/* <div className={styles.author}>
            <h2 className={inter.className}>Peter Laning</h2>
          </div> */}
          <div className={styles.model}></div>
          <Scroller/>
        </div>
      </div>
      <HelpingHand/>
      <Modal itemId={itemId} isOpen={isModalOpen} onClose={closeModal}/>
    </>
  );
}
