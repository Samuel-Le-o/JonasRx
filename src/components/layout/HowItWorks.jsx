import React from 'react';
import { Search, Percent, Smartphone, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: <Search className="text-primary" size={24} />,
    title: 'Search Your Medication',
    description: 'Type in your exact brand or generic drug name and choose your local area zip or city location to search live database discount structures.'
  },
  {
    step: '02',
    icon: <Percent className="text-success" size={24} />,
    title: 'Compare Local Prices',
    description: 'Instantly scan a real-time comparison matrix showing pricing layers across major neighborhood pharmacy counters right near you.'
  },
  {
    step: '03',
    icon: <Smartphone className="text-warning" size={24} />,
    title: 'Show Coupon & Save',
    description: 'Bring the completely free prescription coupon voucher up on your mobile screen or print it out, hand it to your pharmacist, and unlock up to 80% off.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white font-sans text-left">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <h2 className="text-xs uppercase tracking-widest font-black text-primary">Simple Three-Step Protocol</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-navy font-serif tracking-tight">
            How Free Coupons Lower Your Prescription Outlays
          </h3>
          <p className="text-slate-500 text-sm font-medium leading-relaxed">
            JonasRx doesn't require hidden fees, upfront retainers, or membership cards to save money. Follow these simple steps at your next pharmacy pickup.
          </p>
        </div>

        {/* Step Cards Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50/60 border border-slate-200/60 p-8 rounded-card relative group hover:bg-white hover:shadow-2xl hover:shadow-navy/5 hover:border-primary/20 transition-all duration-300"
            >
              {/* Massive Structural Background Step Number */}
              <div className="absolute top-4 right-6 font-mono text-5xl font-black text-slate-200/50 group-hover:text-primary/10 transition-colors select-none">
                {item.step}
              </div>

              {/* Icon Container Shell */}
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs mb-6 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>

              {/* Informational Copy Stack */}
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-navy tracking-tight">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.description}</p>
              </div>

              {/* Animated Right Arrow Connector Indicator (Hides on Last Item and Mobile) */}
              {idx < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10 text-slate-300 group-hover:text-primary transition-colors translate-x-1">
                  <ArrowRight size={20} className="stroke-[1.5]" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}