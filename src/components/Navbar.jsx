'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-10 container w-[90%] left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row lg:gap-5 justify-between items-center rounded-[42px] p-2.5 z-50 transition-all duration-500 ease-in-out ${isMenuOpen ? 'gap-5' : 'gap-0'}`}>
      <div className="flex justify-between w-full lg:w-fit items-center">
        <div className="logo">
          <Link href="/">
            <Image src="/logo.svg" alt="The Tooth Room logo" width={180} height={50} priority className="w-auto h-10" />
          </Link>
        </div>

        <div 
          className="transform cursor-pointer menu-icon ltr:mr-5 rtl:ml-5 lg:hidden rtl:-scale-x-100"
          onClick={toggleMenu}
        >
          <Image src="/burger-menu.svg" alt="menu" width={40} height={40} />
        </div>
      </div>

      <div 
        className={`flex flex-col gap-5 text-center nav-links lg:flex lg:flex-row lg:justify-between lg:opacity-100 transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 max-h-96' 
            : 'opacity-0 max-h-0 lg:opacity-100 lg:max-h-none'
        }`}
        style={{
          overflow: isMenuOpen ? 'visible' : 'hidden'
        }}
      >
        <Link href="#home" onClick={() => setIsMenuOpen(false)}>{t('home')}</Link>
        <Link href="#aboutUs" onClick={() => setIsMenuOpen(false)}>{t('about_us')}</Link>
        <Link href="#services" onClick={() => setIsMenuOpen(false)}>{t('Services')}</Link>
        <Link href="#gallery" onClick={() => setIsMenuOpen(false)}>{t('nav_gallery')}</Link>
        <Link href="#testimonials" onClick={() => setIsMenuOpen(false)}>{t('testimonials')}</Link>
        <Link href="#contact" onClick={() => setIsMenuOpen(false)}>{t('Contact_us')}</Link>
      </div>

      <div 
        className={`flex gap-4 nav-cta lg:flex lg:opacity-100 transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 max-h-32' 
            : 'opacity-0 max-h-0 lg:opacity-100 lg:max-h-none'
        }`}
        style={{
          overflow: isMenuOpen ? 'visible' : 'hidden'
        }}
      >
        <Link href={`/${locale.toLocaleLowerCase() === 'en' ? 'ar' : 'en'}`}>
          <button className="bg-gray !text-black flex items-center gap-1.5 cursor-pointer">
            {t('lang')}
            <Image src="/language.svg" alt="language" width={22} height={22} />
          </button>
        </Link>
        <Link href='#contact' onClick={() => setIsMenuOpen(false)}>
          <button className="bg-blue cursor-pointer">{t('booking_button')}</button>
        </Link>
      </div>
    </nav>
  );
}
