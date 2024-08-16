'use client'

import { Inter } from "next/font/google";
import Slider from "./components/slider";
import SliderItem from "./components/slider-item";
import Modal from './components/modal';
import React, { useState } from 'react';

import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const baseRoute = process.env.NEXT_PUBLIC_BASE_URL;
  
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.banner}>
        <Slider qty={9}>
          <SliderItem pos={1} imageName="dot-net_200x200.svg" openModal={openModal}/>
          <SliderItem pos={2} imageName="csharp_200x200.svg" openModal={openModal}/>
          <SliderItem pos={3} imageName="javascript_200x200.svg" openModal={openModal}/>
          <SliderItem pos={4} imageName="sql-server_200x200.svg" openModal={openModal}/>
          <SliderItem pos={5} imageName="react_200x200.svg" openModal={openModal}/>
          <SliderItem pos={6} imageName="angularjs_200x200.svg" openModal={openModal}/>
          <SliderItem pos={7} imageName="css_200x200.svg" openModal={openModal}/>
          <SliderItem pos={8} imageName="ux-ui_200x200.svg" openModal={openModal}/>
          <SliderItem pos={9} imageName="azure-devops_200x200.svg" openModal={openModal}/>
        </Slider>
        <div className={styles.content}>
          <h1 className={inter.className}>Portfolio</h1>
          <div className={styles.author}>
            <h2 className={inter.className}>Peter Laning</h2>
            <p className={inter.className}><strong>Web Design</strong></p>
          </div>
          <div className={styles.model}></div>
        </div>
      </div>
      <Modal title="Modal Title" isOpen={isModalOpen} onClose={closeModal}>
        <p>This is the modal content</p>
      </Modal>
    </>
  );
}
