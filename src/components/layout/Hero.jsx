import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { MOCK_DRUGS, MOCK_LOCATIONS } from '../../data/mockDrugs';

export default function Hero() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('Sowutoum, Accra');
  const [showDrugDropdown, setShowDrugDropdown] = useState(false);
  const [showLocDropdown, setShowLocDropdown] = useState(false);
  
  const drugRef = useRef(null);
  const locRef = useRef(null);

  const filteredDrugs = MOCK_DRUGS.filter(d => 
    d.name.toLowerCase().includes(query.toLowerCase()) || 
    d.generic.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (drugRef.current && !drugRef.current.contains(e.target)) setShowDrugDropdown(false);
      if (locRef.current && !locRef.current.contains(e.target)) setShowLocDropdown(false);
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleSearchSubmit = (drugName) => {
    const target = drugName || query || 'Lipitor';
    navigate(`/search?drug=${encodeURIComponent(target)}&loc=${encodeURIComponent(location)}`);
  };

  return (
    <section className="bg-[#F9F8F4] pt-6 pb-14 font-sans text-left">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Mini Header Disclaimer */}
        <div className="flex justify-end text-[11px] text-slate-700 font-medium mb-4">
          <span>JonasRx is NOT insurance</span>
        </div>

        

        {/* Section Headline Title */}
        <h2 className="text-[28px] sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-5 px-1 md:px-0">
          New and now
        </h2>

        {/* Triple Column Promotional Row: Horizontal Carousel on Mobile, Desktop Grid */}
        <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0">
          
          {/* Card 1: Weight Loss Treatment Promo */}
          <div className="min-w-[85vw] sm:min-w-[340px] md:min-w-0 snap-center bg-gradient-to-br from-[#005B7F] to-[#0183B7] rounded-2xl p-6 text-white flex flex-col justify-between min-h-[240px] relative overflow-hidden shadow-xs">
            <div>
              <span className="block text-[10px] font-black tracking-wider uppercase opacity-85 mb-3">
                WEIGHT LOSS TREATMENT
              </span>
              <h3 className="text-xl font-extrabold leading-tight max-w-[210px] tracking-tight">
                Need a GLP-1 prescription for weight loss?
              </h3>
              <p className="text-[13px] opacity-90 mt-2 max-w-[230px] leading-snug">
                Get unlimited online care and access to low-cost brand-name GLP-1s.
              </p>
            </div>
            
            <div className="mt-6 flex items-end justify-between z-10">
              <button 
                onClick={() => navigate('/online-care')}
                className="bg-black text-white font-bold text-xs px-4 py-2.5 rounded-full hover:bg-slate-900 transition-colors flex items-center gap-1.5"
              >
                <span>Get started</span>
                <ArrowRight size={14} />
              </button>
              
              {/* Floating Pricing Badge Graphic Component */}
              <div className="absolute right-5 bottom-5 w-16 h-16 bg-[#FFE600] text-black rounded-full flex flex-col items-center justify-center shadow-md transform rotate-6 border border-white/10">
                <span className="text-[13px] font-black leading-none">$39</span>
                <span className="text-[8px] font-bold uppercase tracking-tighter mt-0.5">per month</span>
              </div>
            </div>
          </div>

          {/* Card 2: Save on GLP-1 Medication Pricing Grid */}
          <div className="min-w-[85vw] sm:min-w-[340px] md:min-w-0 snap-center bg-white border border-slate-200 rounded-2xl flex flex-col justify-between min-h-[240px] shadow-xs overflow-hidden">
            <div className="p-5 flex-1 flex flex-col justify-between">
              <span className="block text-[10px] font-black tracking-wider text-slate-500 uppercase mb-4">
                SAVE ON GLP-1 MEDICATION
              </span>
              
              <div className="space-y-4 flex-1 flex flex-col justify-center">
                {/* Row 1: Foundayo */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 cursor-pointer group" onClick={() => handleSearchSubmit('Foundayo')}>
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#E5F2F7] flex items-center justify-center text-[#0173A5] text-[11px] font-black">F</div>
                    <div>
                      <span className="text-sm font-bold text-slate-900 block group-hover:text-sky-700 transition-colors">Foundayo™</span>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-2">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium leading-none">As low as</span>
                      <span className="text-base font-black text-slate-900 leading-tight">$149</span>
                    </div>
                    <ArrowRight size={16} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                {/* Row 2: Zepbound */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 cursor-pointer group" onClick={() => handleSearchSubmit('Zepbound')}>
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#FBF2E6] flex items-center justify-center text-[#B26E12] text-[11px] font-black">Z</div>
                    <div>
                      <span className="text-sm font-bold text-slate-900 block group-hover:text-sky-700 transition-colors">Zepbound®</span>
                      <span className="text-[10px] text-slate-400 block font-medium">KwikPen and others</span>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-2">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium leading-none">As low as</span>
                      <span className="text-base font-black text-slate-900 leading-tight">$299</span>
                    </div>
                    <ArrowRight size={16} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                {/* Row 3: Wegovy */}
                <div className="flex items-center justify-between cursor-pointer group" onClick={() => handleSearchSubmit('Wegovy')}>
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#EFEBF4] flex items-center justify-center text-[#663A99] text-[11px] font-black">W</div>
                    <div>
                      <span className="text-sm font-bold text-slate-900 block group-hover:text-sky-700 transition-colors">Wegovy®</span>
                      <span className="text-[10px] text-slate-400 block font-medium">Tablet, pen, and HD pen</span>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-2">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium leading-none">As low as</span>
                      <span className="text-base font-black text-slate-900 leading-tight">$149</span>
                    </div>
                    <ArrowRight size={16} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: JonasRx Companion Application Promo Panel */}
          <div className="min-w-[85vw] sm:min-w-[340px] md:min-w-0 snap-center bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between min-h-[240px] shadow-xs relative overflow-hidden">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black tracking-wider text-slate-500 uppercase">
                  JONASRX COMPANION
                </span>
                <span className="bg-[#FFE600] text-black text-[10px] font-black px-2 py-0.5 rounded flex items-center gap-0.5">
                  ★ New
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-[200px]">
                200+ free medications
              </h3>
              <p className="text-[13px] text-slate-600 mt-2 max-w-[220px] leading-snug">
                Plus deep discounts on dental, vision, labs, imaging, and online care. All for $14.99/month.
              </p>
            </div>
            
            <div className="mt-4 relative z-10">
              <button 
                onClick={() => navigate('/companion')}
                className="w-full bg-black hover:bg-slate-900 text-white font-bold text-xs py-3 rounded-full transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Start your free trial</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Abstract Decorative Profile Overlay Shape mimicking background vectors */}
            <div className="absolute right-0 bottom-0 w-28 h-28 bg-[#FFF9CC] rounded-tl-full opacity-40 pointer-events-none -z-0"></div>
          </div>

        </div>

      </div>
    </section>
  );
}