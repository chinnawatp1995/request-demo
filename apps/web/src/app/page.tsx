'use client';

import { useState } from 'react';
import { DemoForm } from '@/components/DemoForm';
import { SuccessMessage } from '@/components/SuccessMessage';

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-[#F9FAFC] flex items-center justify-center p-4">
        <SuccessMessage onReset={() => setIsSubmitted(false)} />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F9FAFC]">
      {/* Header */}
      <header className="h-[92px] bg-white flex items-center px-6 lg:px-[135px]">
        <h1 className="text-[42px] font-normal tracking-[0.01em]" style={{ fontFamily: 'Darkline, sans-serif' }}>
          Sport News
        </h1>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[135px] pt-16 lg:pt-24 pb-16 lg:pb-[120px]">
        <div className="w-full lg:w-[45%] max-w-xl z-10 relative">
          <h2 className="text-[50px] lg:text-[76px] font-black text-[#1E1E1E] leading-[0.95] mb-8" style={{ fontFamily: 'Figtree, sans-serif' }}>
            TOP SCORER<br />TO THE FINAL<br />MATCH
          </h2>
          <p className="text-[#333333] text-lg mb-12 max-w-[420px] leading-relaxed">
            The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals
          </p>
          <button className="bg-[#1E1E1E] hover:bg-[#333333] text-white px-8 py-4 rounded font-bold text-[15px] tracking-[0.05em] uppercase transition-colors">
            CONTINUE READING
          </button>
        </div>
        <div className="w-full lg:w-[55%] relative flex justify-end mt-12 lg:mt-0">
          <img src="/assets/basketball-player-action-sunset 1.svg" alt="Basketball player jumping" className="w-full lg:w-[130%] h-auto object-contain z-0 -mr-10 lg:-translate-y-24" />
        </div>
      </section>

      {/* Category Section */}
      <section className="px-6 lg:px-[135px] py-16 mt-[-100px] z-10 relative">
        <h2 className="text-[32px] lg:text-[40px] font-bold text-[#1E1E1E] mb-10" style={{ fontFamily: 'Figtree, sans-serif' }}>
          Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Football Column */}
          <div className="flex flex-col gap-6 h-full">
            <div className="bg-[#EDF1F6] rounded-[24px] py-12 flex justify-center items-center">
              <h3 className="text-[32px] font-black text-[#1A1A1A] m-0" style={{ fontFamily: 'Figtree, sans-serif' }}>FOOTBALL</h3>
            </div>
            <div className="flex-1 rounded-[24px] overflow-hidden min-h-[300px]">
               <img src="/assets/soccer-ball-green-grass-soccer-field-generative-ai 1.svg" alt="Football" className="w-full h-[320px] object-cover" />
            </div>
          </div>

          {/* Basketball Column */}
          <div className="flex flex-col gap-6 h-full">
            <div className="flex-1 rounded-[24px] overflow-hidden min-h-[300px]">
              <img src="/assets/close-up-basketball-outdoors 1.svg" alt="Basketball" className="w-full h-[320px] object-cover" />
            </div>
            <div className="bg-[#EDF1F6] rounded-[24px] py-12 flex justify-center items-center">
              <h3 className="text-[32px] font-black text-[#1A1A1A] text-center leading-[1.05] m-0" style={{ fontFamily: 'Figtree, sans-serif' }}>BASCKET<br/>BALL</h3>
            </div>
          </div>

          {/* Car Sport Column */}
          <div className="flex flex-col gap-6 h-full">
             <div className="bg-[#EDF1F6] rounded-[24px] py-12 flex justify-center items-center">
              <h3 className="text-[32px] font-black text-[#1A1A1A] m-0" style={{ fontFamily: 'Figtree, sans-serif' }}>CAR SPORT</h3>
            </div>
             <div className="flex-1 rounded-[24px] overflow-hidden min-h-[300px]">
               <img src="/assets/sport-car-is-drifting-track-with-smoke-around-it 1.svg" alt="Car Sport" className="w-full h-[320px] object-cover" />
            </div>
          </div>

          {/* Table Tennis Column */}
          <div className="flex flex-col rounded-[24px] bg-black overflow-hidden relative group min-h-[460px] h-full">
             <div className="flex-1 flex items-center justify-center overflow-hidden">
               <img src="/assets/red-ping-pong-racket-sports-equipment 1.svg" alt="Table Tennis" className="w-full h-full object-cover scale-110 object-top" />
             </div>
             <div className="bg-[#EDF1F6] rounded-xl m-4 py-8 flex justify-center items-center absolute bottom-0 left-0 right-0">
               <h3 className="text-[32px] font-black text-[#1A1A1A] text-center leading-[1.05] m-0" style={{ fontFamily: 'Figtree, sans-serif' }}>TABLE<br/>TENNIS</h3>
             </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="flex flex-col items-center px-4 py-24 mt-12 mb-20">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(123,101,102,0.1)] mb-6">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1.33334L8 3.33334" stroke="#262626" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 12.6667L8 14.6667" stroke="#262626" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.28574 3.2858L4.69995 4.70001" stroke="#262626" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.3 11.3L12.7142 12.7142" stroke="#262626" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.33334 8H3.33334" stroke="#262626" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.6667 8H14.6667" stroke="#262626" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.28574 12.7142L4.69995 11.3" stroke="#262626" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.3 4.70001L12.7142 3.2858" stroke="#262626" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm font-semibold text-[#262626]" style={{ fontFamily: 'Figtree, sans-serif' }}>
            Get Started
          </span>
        </div>
        <h2 className="text-[48px] lg:text-[60px] font-bold text-[#262626] text-center leading-none mb-6" style={{ fontFamily: 'Figtree, sans-serif' }}>
          Request a Demo
        </h2>
        <p className="text-[18px] lg:text-[20px] text-[#78716D] text-center mb-16" style={{ fontFamily: 'Figtree, sans-serif' }}>
          Our team will walk you through the platform.
        </p>

        <div className="w-full max-w-[1200px]">
          <DemoForm onSuccess={() => setIsSubmitted(true)} />
        </div>
      </section>
    </main>
  );
}