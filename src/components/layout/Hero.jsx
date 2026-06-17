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
    <section className="bg-[#F9F8F4] pt-6 pb-14 font-sans text-left select-none">
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
          
          {/* Card 1: Weight Loss Treatment Promo (With Gradient & Syringe Image Background) */}
          <div 
            className="min-w-[85vw] sm:min-w-[340px] md:min-w-0 snap-center rounded-2xl text-white flex flex-col justify-between min-h-[250px] relative overflow-hidden shadow-xs bg-cover bg-right-bottom bg-no-repeat"
            style={{ 
              backgroundImage: `linear-gradient(135deg, #005B7F 0%, #0183B7 45%, rgba(1, 131, 183, 0.4) 100%), url('https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=400&q=80')` 
            }}
          >
            <div className="p-6">
              <span className="block text-[10px] font-black tracking-wider uppercase opacity-90 mb-3">
                WEIGHT LOSS TREATMENT
              </span>
              <h3 className="text-xl font-extrabold leading-tight max-w-[210px] tracking-tight">
                Need a <span className="text-[#9FE2FF] underline decoration-2">GLP-1 prescription</span> for weight loss?
              </h3>
              <p className="text-[13px] opacity-90 mt-2 max-w-[210px] leading-snug font-medium">
                Get unlimited online care and access to low-cost brand-name GLP-1s.
              </p>
            </div>
            
            <div className="p-6 pt-0 flex items-end justify-between z-10">
              <button 
                onClick={() => navigate('/online-care')}
                className="bg-black text-white font-bold text-xs px-4 py-2.5 rounded-full hover:bg-slate-900 transition-colors flex items-center gap-1.5"
              >
                <span>Get started</span>
                <ArrowRight size={14} />
              </button>
              
              {/* Floating Yellow Badge */}
              <div className="w-16 h-16 bg-[#FFE600] text-black rounded-full flex flex-col items-center justify-center shadow-md transform rotate-6 border border-white/20 shrink-0">
                <span className="text-[14px] font-black leading-none">$39</span>
                <span className="text-[7px] font-extrabold uppercase tracking-tighter mt-0.5">per month</span>
              </div>
            </div>
          </div>

          {/* Card 2: Save on GLP-1 Medication with Distinct Drug Images */}
          <div className="min-w-[85vw] sm:min-w-[340px] md:min-w-0 snap-center bg-white border border-slate-200/80 rounded-2xl flex flex-col justify-between min-h-[250px] shadow-xs overflow-hidden">
            <div className="bg-black text-white p-5">
              <span className="block text-[15px] font-black tracking-wider uppercase text-center md:text-left">
                SAVE ON GLP-1 MEDICATION
              </span>
            </div>
            
            <div className="px-5 py-3 flex-1 flex flex-col justify-between space-y-2">
              {/* Row 1: Foundayo */}
              <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-2 cursor-pointer group" onClick={() => handleSearchSubmit('Foundayo')}>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=60&h=60&q=80" 
                    alt="Foundayo" 
                    className="w-8 h-8 rounded-full object-cover border border-slate-100"
                  />
                  <div>
                    <span className="text-sm font-bold text-slate-900 block group-hover:text-primary transition-colors">Foundayo™</span>
                  </div>
                </div>
                <div className="text-right flex items-center gap-2">
                  <div>
                    <span className="text-[9px] text-slate-400 block font-semibold leading-none">As low as</span>
                    <span className="text-base font-black text-slate-900 leading-tight">$149</span>
                  </div>
                  <ArrowRight size={15} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Row 2: Zepbound */}
              <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-2 cursor-pointer group" onClick={() => handleSearchSubmit('Zepbound')}>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=60&h=60&q=80" 
                    alt="Zepbound" 
                    className="w-8 h-8 rounded-full object-cover border border-slate-100"
                  />
                  <div>
                    <span className="text-sm font-bold text-slate-900 block group-hover:text-primary transition-colors">Zepbound®</span>
                    <span className="text-[9px] text-slate-400 block font-medium">KwikPen and others</span>
                  </div>
                </div>
                <div className="text-right flex items-center gap-2">
                  <div>
                    <span className="text-[9px] text-slate-400 block font-semibold leading-none">As low as</span>
                    <span className="text-base font-black text-slate-900 leading-tight">$299</span>
                  </div>
                  <ArrowRight size={15} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Row 3: Wegovy */}
              <div className="flex items-center justify-between pt-1 cursor-pointer group" onClick={() => handleSearchSubmit('Wegovy')}>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=60&h=60&q=80" 
                    alt="Wegovy" 
                    className="w-8 h-8 rounded-full object-cover border border-slate-100"
                  />
                  <div>
                    <span className="text-sm font-bold text-slate-900 block group-hover:text-primary transition-colors">Wegovy®</span>
                    <span className="text-[9px] text-slate-400 block font-medium">Tablet, pen, and HD pen</span>
                  </div>
                </div>
                <div className="text-right flex items-center gap-2">
                  <div>
                    <span className="text-[9px] text-slate-400 block font-semibold leading-none">As low as</span>
                    <span className="text-base font-black text-slate-900 leading-tight">$149</span>
                  </div>
                  <ArrowRight size={15} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Companion Application (With Profile Image Component Background Layer) */}
          <div 
            className="min-w-[85vw] sm:min-w-[340px] md:min-w-0 snap-center rounded-2xl flex flex-col justify-between min-h-[250px] shadow-xs relative overflow-hidden bg-white border border-slate-200/80 bg-no-repeat bg-right-bottom"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=260&q=80')`,
              backgroundSize: '42% auto'
            }}
          >
            {/* Dark Header Banner Line */}
            <div className="bg-black text-white p-5 flex justify-between items-center w-full z-10 ">
              <span className="text-[15px] font-black tracking-wider uppercase">
                JONASRX COMPANION
              </span>
              <span className="bg-[#FFE600] text-black text-[9px] font-black px-1.5 py-0.5 rounded flex items-center gap-0.5 shadow-2xs">
                ★ New
              </span>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between relative z-10">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-[190px]">
                  200+ free medications
                </h3>
                <p className="text-[12.5px] text-slate-600 mt-2 max-w-[175px] sm:max-w-[190px] leading-snug font-medium">
                  Plus deep discounts on dental, vision, labs, imaging, and online care. All for $14.99/month.
                </p>
              </div>
              
              <div className="mt-4 max-w-[180px]">
                <button 
                  onClick={() => navigate('/companion')}
                  className="w-full bg-black hover:bg-slate-900 text-white font-bold text-xs py-2.5 rounded-full transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Start your free trial</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

            {/* Simulated Yellow Line Vector Graphic Layer */}
            <div className="absolute right-0 bottom-0 top-10 left-0 border-2 border-transparent pointer-events-none rounded-2xl overflow-hidden">
              <svg className="absolute right-2 bottom-8 w-32 h-32 text-[#FFE600] opacity-75" fill="none" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="1.5">
                <path d="M10,80 Q40,30 70,70 T120,20" strokeDasharray="2,2" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}