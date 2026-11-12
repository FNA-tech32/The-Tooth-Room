'use client'

import { useLocale, useTranslations } from 'next-intl';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import { CONTACT_DETAILS } from '@/config/contact';

export default function Contact() {
    const t = useTranslations();
    const locale = useLocale();
    const formRef = useRef(null);

    const scriptURL = "https://script.google.com/macros/s/AKfycbyJNEzPEvi_55kgNHdN_Me18TDGudsX4dGHSwB-in-X3rEGmOt7Pqpfcp5K-p6Tzzs_/exec";

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = formRef.current;
        const formData = new FormData(form);

        // Solve phone number formatting
        const phone = formData.get("phone");
        formData.set("phone", `\u200B${phone}`);

        const altPhone = formData.get("alt_phone");
        if (altPhone) {
            formData.set("alt_phone", `\u200B${altPhone}`);
        }

        toast.promise(
            fetch(scriptURL, { method: 'POST', body: formData }),
            {
                loading: t('loading'),
                success: t('success'),
                error: t('error'),
            }
        ).then(() => form.reset());
    };

    const isArabic = locale === 'ar';
    const addressText = isArabic ? CONTACT_DETAILS.address.ar : CONTACT_DETAILS.address.en;
    const hoursText = isArabic ? CONTACT_DETAILS.hours.weekdaysAr : CONTACT_DETAILS.hours.weekdaysEn;

    return (
        <section id='contact' className='bg-[#F5F5F5] py-20 scroll-mt-12'>
            <div className="container w-[90%] mx-auto">
                
                {/* Contact Details & Alternative Channels Cards */}
                <div className="mb-14">
                    <h2 className='mb-3 text-4xl md:text-5xl font-bold text-center'>{t('contact_details_title')}</h2>
                    <p className='font-semibold text-lg md:text-2xl text-[#4B5563] text-center mb-8 max-w-2xl mx-auto'>{t('contact_details_desc')}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        
                        {/* Primary Contact */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1E40AF] flex items-center justify-center text-2xl mb-4">
                                    📞
                                </div>
                                <h3 className="text-xl font-bold mb-1">{t('primary_call')}</h3>
                                <p className="text-sm text-gray-500 mb-3">{isArabic ? "مكتب الاستقبال الرئيسي" : "Main Reception Desk"}</p>
                            </div>
                            <a
                                href={`tel:${CONTACT_DETAILS.phone.primaryRaw}`}
                                className="text-lg font-bold text-[#1E40AF] hover:underline"
                                dir="ltr"
                            >
                                {CONTACT_DETAILS.phone.primaryDisplay}
                            </a>
                        </div>

                        {/* Alternative Contact */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl mb-4">
                                    📱
                                </div>
                                <h3 className="text-xl font-bold mb-1">{t('alt_call')}</h3>
                                <p className="text-sm text-gray-500 mb-3">{isArabic ? "خط بديل للطوارئ ٢٤/٧" : "Alternative & 24/7 Emergency Line"}</p>
                            </div>
                            <a
                                href={`tel:${CONTACT_DETAILS.phone.alternativeRaw}`}
                                className="text-lg font-bold text-amber-600 hover:underline"
                                dir="ltr"
                            >
                                {CONTACT_DETAILS.phone.alternativeDisplay}
                            </a>
                        </div>

                        {/* WhatsApp & Email */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center text-2xl mb-4">
                                    💬
                                </div>
                                <h3 className="text-xl font-bold mb-1">{t('whatsapp')} & {t('email_us')}</h3>
                                <div className="space-y-1 mb-2">
                                    <p className="text-sm text-gray-600">
                                        <a
                                            href={CONTACT_DETAILS.whatsapp.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-600 hover:underline font-semibold"
                                            dir="ltr"
                                        >
                                            {CONTACT_DETAILS.whatsapp.display}
                                        </a>
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        <a href={`mailto:${CONTACT_DETAILS.email.primary}`} className="hover:underline text-gray-700">
                                            {CONTACT_DETAILS.email.primary}
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <span className="text-xs text-gray-400">
                                {isArabic ? "رد فوري على الواتساب" : "Instant WhatsApp response"}
                            </span>
                        </div>

                        {/* Location & Hours */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl mb-4">
                                    📍
                                </div>
                                <h3 className="text-xl font-bold mb-1">{t('our_location')}</h3>
                                <p className="text-sm text-gray-600 mb-2">{addressText}</p>
                            </div>
                            <p className="text-xs font-semibold text-purple-700">
                                🕒 {hoursText}
                            </p>
                        </div>

                    </div>
                </div>

                {/* Booking Form with Primary and Alternative Contact details */}
                <form
                    name="submit-to-google-sheet"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="bg-white py-12 px-6 md:px-12 rounded-4xl shadow-sm border border-gray-100"
                >
                    <h2 className='mb-3 text-4xl md:text-5xl font-bold text-center'>{t('book_title')}</h2>
                    <p className='font-semibold text-xl md:text-2xl text-[#4B5563] text-center mb-10'>{t('booking_desc')}</p>

                    <div className="w-full max-w-4xl mx-auto">
                        <div className="flex flex-col gap-5 md:flex-row">
                            <div className="flex flex-col md:w-1/2">
                                <label htmlFor="name" className='mb-2 font-medium'>{t('booking_full_name')} *</label>
                                <input
                                    type="text"
                                    id='name'
                                    name='name'
                                    placeholder={isArabic ? "اكتب اسمك الكامل" : "Enter your full name"}
                                    className='h-11 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    required
                                />
                            </div>

                            <div className="flex flex-col md:w-1/2">
                                <label htmlFor="phone" className='mb-2 font-medium'>{t('booking_phone_number')} *</label>
                                <input
                                    type="tel"
                                    id='phone'
                                    name='phone'
                                    placeholder={isArabic ? "مثال: 01019071584" : "e.g. +1 (555) 382-7666"}
                                    className='h-11 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    required
                                />
                            </div>
                        </div>

                        {/* Alternative Contact Detail field */}
                        <div className="flex flex-col gap-5 my-5 md:flex-row">
                            <div className="flex flex-col md:w-1/2">
                                <label htmlFor="alt_phone" className='mb-2 font-medium'>
                                    {t('booking_alt_phone_number')}
                                </label>
                                <input
                                    type="tel"
                                    id='alt_phone'
                                    name='alt_phone'
                                    placeholder={isArabic ? "رقم بديل، واتساب، أو هاتف الطوارئ" : "Alternative mobile, WhatsApp, or emergency phone"}
                                    className='h-11 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                            </div>

                            <div className="flex flex-col md:w-1/2">
                                <label htmlFor="date" className='mb-2 font-medium'>{t('booking_date')} *</label>
                                <input
                                    type="date"
                                    id='date'
                                    name='date'
                                    className='h-11 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 mb-5">
                            <div className="flex flex-col w-full">
                                <label htmlFor="type" className='mb-2 font-medium'>{t('booking_service_type')} *</label>
                                <select
                                    name="type"
                                    id="type"
                                    className='h-11 p-2 text-base rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white'
                                    required
                                >
                                    <option value="general">{t('general_dentistry')}</option>
                                    <option value="cosmetic">{t('cosmetic')}</option>
                                    <option value="orthodontics">{t('orthodontics')}</option>
                                    <option value="whitening">{t('teeth_whitening')}</option>
                                </select>
                            </div>

                            <div className="flex flex-col w-full">
                                <label htmlFor="notes" className='mb-2 font-medium'>{t('book_notes')}</label>
                                <textarea
                                    name="notes"
                                    id="notes"
                                    placeholder={isArabic ? "أية ملاحظات أو تفاصيل إضافية..." : "Any additional notes or treatment details..."}
                                    className='p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-32'
                                ></textarea>
                            </div>
                        </div>

                        <div className="flex justify-center mt-6">
                            <button
                                type='submit'
                                className="bg-blue px-10 py-3 rounded-full text-white font-semibold cursor-pointer hover:opacity-90 transition-opacity shadow-md"
                            >
                                {t('booking_button')}
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </section>
    );
}
