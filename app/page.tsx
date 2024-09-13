"use client"; // Đánh dấu đây là Client Component

import { lazy, Suspense, useState } from 'react';

// const Banner = lazy(() => import('./components/Banner'));
const Header = lazy(() => import('./components/Header'));
const MainContent = lazy(() => import('./components/MainContent'));
const Footer = lazy(() => import('./components/Footer'));
const Modal = lazy(() => import('./components/Modal/page')); // Import modal

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header onLoginClick={handleLoginClick} />
      {/* <Banner /> */}
      <MainContent />
      <Footer />
      {isModalOpen && <Modal />}
    </Suspense>
  );
}
