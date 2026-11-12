import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CONTACT_DETAILS } from '@/config/contact';

export default function Footer() {
    const t = useTranslations();
    const locale = useLocale();
    const isArabic = locale === 'ar';

    return (
        <footer className='bg-[#111827] text-white'>
            <div className="container w-[90%] mx-auto py-12 flex flex-col gap-8">

                {/* Top Section: Logo & Navigation Links */}
                <div className="flex flex-col items-center justify-between gap-6 pb-6 border-b border-white/20 lg:flex-row">
                    <Link href="/">
                        <Image src="/logo-white.svg" alt="The Tooth Room logo" width={190} height={50} className="w-auto h-11" />
                    </Link>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base">
                        <Link href="#home" className="hover:text-blue-400 transition-colors">{t('home')}</Link>
                        <Link href="#aboutUs" className="hover:text-blue-400 transition-colors">{t('about_us')}</Link>
                        <Link href="#services" className="hover:text-blue-400 transition-colors">{t('Services')}</Link>
                        <Link href="#gallery" className="hover:text-blue-400 transition-colors">{t('nav_gallery')}</Link>
                        <Link href="#testimonials" className="hover:text-blue-400 transition-colors">{t('testimonials')}</Link>
                        <Link href="#contact" className="hover:text-blue-400 transition-colors">{t('Contact_us')}</Link>
                    </div>
                </div>

                {/* Middle Section: Direct & Alternative Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-4 text-sm text-gray-300 border-b border-white/10">
                    <div>
                        <span className="block text-xs uppercase tracking-wider text-gray-400 mb-1">{t('primary_call')}</span>
                        <a href={`tel:${CONTACT_DETAILS.phone.primaryRaw}`} className="text-white hover:text-blue-400 font-semibold" dir="ltr">
                            {CONTACT_DETAILS.phone.primaryDisplay}
                        </a>
                    </div>

                    <div>
                        <span className="block text-xs uppercase tracking-wider text-gray-400 mb-1">{t('alt_call')} (24/7)</span>
                        <a href={`tel:${CONTACT_DETAILS.phone.alternativeRaw}`} className="text-amber-400 hover:underline font-semibold" dir="ltr">
                            {CONTACT_DETAILS.phone.alternativeDisplay}
                        </a>
                    </div>

                    <div>
                        <span className="block text-xs uppercase tracking-wider text-gray-400 mb-1">{t('email_us')}</span>
                        <a href={`mailto:${CONTACT_DETAILS.email.primary}`} className="text-white hover:text-blue-400">
                            {CONTACT_DETAILS.email.primary}
                        </a>
                    </div>

                    <div>
                        <span className="block text-xs uppercase tracking-wider text-gray-400 mb-1">{t('our_location')}</span>
                        <span className="text-gray-300">
                            {isArabic ? CONTACT_DETAILS.address.ar : CONTACT_DETAILS.address.en}
                        </span>
                    </div>
                </div>

                {/* Bottom Section: Copyright & Legal */}
                <div className="flex flex-col-reverse items-center justify-between gap-4 text-xs text-gray-400 md:flex-row">
                    <p> {t('copyrights')} </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="#" className="hover:text-gray-200">{t('privacy_policy')}</Link>
                        <Link href="#" className="hover:text-gray-200">{t('terms_of_use')}</Link>
                        <Link href="#" className="hover:text-gray-200">{t('Cookie_Policy')}</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
