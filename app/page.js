'use client'

import { Inter } from "next/font/google";
/* import { Image, Link } from 'next'; */
import Image from 'next/image';
import Link from 'next/link';
import Modal from './components/modal';
import Dialog from './components/dialog';
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
        <div className={styles.slider} style={{"--quantity": 9}}>
          <div className={styles.item} style={{"--position": 1}} onClick={openModal} title="Click me"><img src={`${baseRoute}/images/dot-net_200x200.svg`}/></div>
          <div className={styles.item} style={{"--position": 2}}><img src={`${baseRoute}/images/csharp_200x200.svg`}/></div>
          <div className={styles.item} style={{"--position": 3}}><img src={`${baseRoute}/images/javascript_200x200.svg`}/></div>
          <div className={styles.item} style={{"--position": 4}}><img src={`${baseRoute}/images/sql-server_200x200.svg`}/></div>
          <div className={styles.item} style={{"--position": 5}}><img src={`${baseRoute}/images/react_200x200.svg`}/></div>
          <div className={styles.item} style={{"--position": 6}}><img src={`${baseRoute}/images/angularjs_200x200.svg`}/></div>
          <div className={styles.item} style={{"--position": 7}}><img src={`${baseRoute}/images/css_200x200.svg`}/></div>
          <div className={styles.item} style={{"--position": 8}}><img src={`${baseRoute}/images/ux-ui_200x200.svg`}/></div>
          <div className={styles.item} style={{"--position": 9}}><Link href="/new"><Image src={`${baseRoute}/images/azure-devops_200x200.svg`} width={200} height={200} alt="Azure DevOps"/></Link></div>
        </div>
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
      {/* <Dialog title="Dialog Title" isOpen={isModalOpen} onClose={closeModal}>
        <p>This is the dialog content</p>
      </Dialog> */}
    </>
  );
}
