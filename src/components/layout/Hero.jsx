import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MapPin, Pill, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { MOCK_DRUGS, MOCK_LOCATIONS } from '../../data/mockDrugs';

export default function Hero() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('Sowutoum, Accra');
  const [showDrugDropdown, setShowDrugDropdown] = useState(false);
  const [showLocDropdown, setShowLocDropdown] = useState(false);
  
  const drugRef = useRef(null);
  const locRef = useRef(null);

  // Filter lists based on interactive inputs
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
    <section className="bg-gradient-to-b from-primary-light/40 via-white to-white py-20 lg:py-28 overflow-hidden font-sans text-left">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Informational Core Input Content Section */}
        <div className="lg:col-span-7 space-y-6 z-10">
          {/* <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
            <Sparkles size={12} /> Smart Healthcare Search Platform
          </div> */}
          
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-navy leading-[1.1] font-serif tracking-tight">
            Compare Prescription Prices & <span className="text-primary font-sans font-extrabold">Save Up to 80%</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl font-medium leading-relaxed">
            Stop overpaying for retail medications. Instantly query thousands of verified pricing structures and match your prescriptions with localized savings instantly.
          </p>

          {/* Core Structured GoodRx-Style Dual Action Search Bar Grid */}
          <div className="bg-white p-3 rounded-card shadow-2xl shadow-navy/5 border border-slate-200 max-w-2xl grid grid-cols-1 md:grid-cols-12 gap-2 relative">
            
            {/* Input Element Area 1: Drug Match Selection */}
            <div ref={drugRef} className="md:col-span-6 relative flex items-center border-b md:border-b-0 md:border-r border-slate-100 pb-2 md:pb-0 md:pr-2">
              <Pill className="text-slate-400 ml-2 shrink-0" size={18} />
              <input 
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setShowDrugDropdown(true); }}
                onFocus={() => setShowDrugDropdown(true)}
                placeholder="Enter drug name (e.g., Lipitor...)"
                className="w-full pl-3 pr-2 py-2 text-sm font-semibold text-navy placeholder-slate-400 focus:outline-none"
              />
              
              {/* Auto-Suggestion Drug Dropdown Menu */}
              {showDrugDropdown && (
                <div className="absolute left-0 right-0 top-[115%] bg-white border border-slate-200 rounded-xl shadow-2xl z-30 max-h-60 overflow-y-auto p-2">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400 p-2">Medications Found</div>
                  {filteredDrugs.map((drug) => (
                    <button
                      key={drug.id}
                      onClick={() => { setQuery(drug.name); setShowDrugDropdown(false); handleSearchSubmit(drug.name); }}
                      className="w-full text-left p-2.5 hover:bg-slate-50 rounded-lg flex items-center justify-between text-xs transition-colors cursor-pointer"
                    >
                      <div>
                        <span className="font-bold text-navy block">{drug.name}</span>
                        <span className="text-slate-400 text-[11px]">Generic: {drug.generic}</span>
                      </div>
                      <span className="font-mono bg-success/10 text-success text-[10px] font-bold px-2 py-1 rounded-md">From ${drug.lowestPrice.toFixed(2)}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input Element Area 2: Geographic Area Filter selection */}
            <div ref={locRef} className="md:col-span-4 relative flex items-center pl-1">
              <MapPin className="text-primary shrink-0" size={18} />
              <input 
                type="text"
                readOnly
                value={location}
                onClick={() => setShowLocDropdown(!showLocDropdown)}
                className="w-full pl-2 pr-2 py-2 text-sm font-bold text-slate-700 cursor-pointer focus:outline-none"
              />
              
              {/* Location List Drawer Option Cards */}
              {showLocDropdown && (
                <div className="absolute left-0 right-0 top-[115%] bg-white border border-slate-200 rounded-xl shadow-2xl z-30 p-2 space-y-1">
                  {MOCK_LOCATIONS.map((loc, lIdx) => (
                    <button
                      key={lIdx}
                      onClick={() => { setLocation(loc); setShowLocDropdown(false); }}
                      className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-primary-light rounded-lg hover:text-primary transition-all cursor-pointer"
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Call To Action Execution Button */}
            <button 
              onClick={() => handleSearchSubmit()}
              className="md:col-span-2 w-full bg-primary hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-button py-3 flex items-center justify-center gap-1.5 transition-all shadow-md shadow-primary/20 cursor-pointer"
            >
              Find Prices
            </button>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold text-slate-500 pt-2">
            <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-success" /> Completely Free Coupons</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-success" /> No Commitments Required</span>
          </div>
        </div>

        {/* Right Side Visual Panel: Mobile App Frame + Floaters */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-[450px]">
          
          {/* Subtle Dynamic Geometric Backdrop Ring */}
          <div className="absolute w-[360px] h-[360px] rounded-full bg-primary/5 border border-primary/10 animate-pulse"></div>

          {/* Main Simulated Phone Canvas Element */}
          <div className="w-[240px] h-[440px] bg-navy rounded-[40px] border-4 border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between p-4 text-white">
            <div className="w-24 h-4 bg-slate-800 rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2"></div>
            
            {/* Mock Header Interface Area */}
            <div className="pt-4 flex justify-between items-center text-[9px] font-mono opacity-60">
              <span>09:41 AM</span>
              <span>JonasRx Mobile</span>
            </div>

            {/* Inner Dashboard Layout Shell Graphics */}
            <div className="space-y-3 flex-1 pt-6 text-left">
              <div className="h-6 w-2/3 bg-white/10 rounded-md"></div>
              <div className="h-12 w-full bg-white/5 border border-white/10 rounded-xl p-2 flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
                <div className="h-2 w-1/2 bg-white/20 rounded"></div>
              </div>
              <div className="space-y-1.5 pt-4">
                <div className="h-10 w-full bg-success/20 border border-success/40 rounded-xl p-2 flex justify-between items-center">
                  <span className="text-[10px] font-bold">Amoxicillin Card</span>
                  <span className="text-xs font-mono font-black text-success">$4.20</span>
                </div>
                <div className="h-10 w-full bg-white/5 border border-white/5 rounded-xl p-2 flex justify-between items-center">
                  <span className="text-[10px] font-medium opacity-80">Retail Cost</span>
                  <span className="text-xs font-mono line-through opacity-40">$28.00</span>
                </div>
              </div>
            </div>

            <div className="text-[9px] text-center bg-primary py-2 rounded-xl font-bold tracking-wide cursor-pointer hover:bg-blue-600 transition-colors">
              Scan Card At Checkout
            </div>
          </div>

          {/* Floating Premium Price Card Badge 1 */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-12 left-0 md:-left-8 bg-white border border-slate-100 shadow-2xl p-3.5 rounded-2xl flex items-center gap-3 w-48 text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0"><Pill size={18} /></div>
            <div>
              <span className="block text-[11px] font-bold text-navy">Lipitor Savings</span>
              <span className="block font-mono text-sm font-black text-primary">$12.50 <span className="text-[9px] text-slate-400 font-medium line-through">$142</span></span>
            </div>
          </motion.div>

          {/* Floating Premium Price Card Badge 2 */}
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-12 right-0 md:-right-8 bg-white border border-slate-100 shadow-2xl p-3.5 rounded-2xl flex items-center gap-3 w-48 text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-success/10 text-success flex items-center justify-center shrink-0"><Sparkles size={18} /></div>
            <div>
              <span className="block text-[11px] font-bold text-slate-500">Average Savings</span>
              <span className="block font-mono text-base font-black text-success">Save 80%</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}