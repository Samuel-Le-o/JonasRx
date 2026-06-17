import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X, ChevronRight, HelpCircle, Sparkles, Pill, Stethoscope, User, Search, MapPin } from 'lucide-react';
import { MOCK_DRUGS, MOCK_LOCATIONS } from '../../data/mockDrugs';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Independent menu control states
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  // Integrated Search Layer States
  const [query, setQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('Sowutoum, Accra');
  const [showDrugDropdown, setShowDrugDropdown] = useState(false);
  const [showLocDropdown, setShowLocDropdown] = useState(false);
  
  const profileRef = useRef(null);
  const drugRef = useRef(null);
  const locRef = useRef(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Prescription savings', path: '/' },
    { name: 'Online care', path: '/telehealth' },
    { name: 'Health info', path: '/articles' },
    { name: 'Companion', path: '/companion', isNew: true },
  ];

  // Popular search items configuration to mimic reference image patterns
  const POPULAR_SEARCH_KEYWORDS = [
    { name: 'Foundayo™' },
    { name: 'Wegovy' },
    { name: 'Tadalafil (Cialis)' },
    { name: 'Sildenafil (Viagra)' },
    { name: 'Atorvastatin' }
  ];

  const filteredDrugs = MOCK_DRUGS?.filter(d => 
    d.name.toLowerCase().includes(query.toLowerCase()) || 
    d.generic.toLowerCase().includes(query.toLowerCase())
  ) || [];

  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setIsProfileOpen(false);
  };

  const handleSearchSubmit = (drugName) => {
    const target = drugName || query || 'Lipitor';
    navigate(`/search?drug=${encodeURIComponent(target)}&loc=${encodeURIComponent(locationQuery)}`);
    setShowDrugDropdown(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (drugRef.current && !drugRef.current.contains(event.target)) {
        setShowDrugDropdown(false);
      }
      if (locRef.current && !locRef.current.contains(event.target)) {
        setShowLocDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* 1. TOP UTILITY STRIP */}
      <div className="bg-[#F9F9FB] border-b border-slate-200/80 py-1.5 px-6 hidden lg:block text-left">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between text-[11px] font-semibold text-slate-500">
          <div className="flex items-center gap-1.5">
            <Stethoscope size={13} className="text-slate-400" />
            <span>Are you a healthcare professional?</span>
            <button 
              onClick={() => navigate('/login')} 
              className="text-primary hover:underline font-bold cursor-pointer"
            >
              Join JonasRx for HCPs
            </button>
          </div>
          <div className="text-slate-400 font-medium">
            JonasRx is NOT insurance
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER BLOCK */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 text-left select-none">
        
        {/* Core Navigation Layer */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
          
          {/* Logo Branding */}
          <div className="flex items-center gap-8">
            <div 
              onClick={() => navigate('/')} 
              className="flex items-center gap-1.5 cursor-pointer group"
            >
              <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-white font-black text-sm tracking-tighter">
                J
              </div>
              <span className="text-xl font-black tracking-tight text-navy">
                Jonas<span className="text-primary">Rx</span>
              </span>
            </div>

            {/* Desktop Center Links */}
            <nav className="hidden lg:flex items-center gap-6 h-16">
              {navLinks.slice(1).map((link) => {
                const isActive = location.pathname === link.path && link.path !== '/';
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.path)}
                    className="relative h-full px-1 text-[13px] font-bold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    {link.name}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-900 rounded-t-full" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-4 relative">
            <button 
              onClick={() => navigate('/telehealth')}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary hover:bg-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
            >
              <Sparkles size={12} className="fill-white/20" /> Get weight loss treatment
            </button>

            <button 
              onClick={() => navigate('/login')}
              className="hidden lg:block text-[13px] font-bold text-slate-700 hover:text-slate-900 cursor-pointer px-2"
            >
              Log in
            </button>

            {/* Profile Action Wrapper */}
            <div ref={profileRef} className="block lg:hidden relative">
              <button
                onClick={() => {
                  setIsProfileOpen(!isProfileOpen);
                  setIsMenuOpen(false);
                }}
                className={`p-2.5 rounded-full text-slate-800 hover:bg-slate-50 transition-all cursor-pointer border ${
                  isProfileOpen ? 'border-slate-300 bg-slate-50' : 'border-transparent'
                }`}
                aria-label="Account Settings"
              >
                <User size={22} className="stroke-[2.2]" />
              </button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute top-[130%] right-[-10px] w-[calc(100vw-32px)] sm:w-80 bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 z-50 text-center space-y-5">
                  <div className="space-y-2">
                    <span className="text-[13px] font-medium text-slate-500 block">New to JonasRx?</span>
                    <button
                      onClick={() => handleNavClick('/register')}
                      className="w-full py-3 px-6 rounded-full bg-slate-950 hover:bg-black text-white font-bold text-sm tracking-wide shadow-sm transition-all cursor-pointer"
                    >
                      Sign up for free
                    </button>
                  </div>

                  <div className="space-y-2 pt-1">
                    <span className="text-[13px] font-medium text-slate-500 block">Already have an account?</span>
                    <button
                      onClick={() => handleNavClick('/login')}
                      className="w-full py-3 px-6 rounded-full border-2 border-slate-950 hover:bg-slate-50 text-slate-950 font-bold text-sm tracking-wide transition-all cursor-pointer"
                    >
                      Log in
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => {
                setIsMenuOpen(true);
                setIsProfileOpen(false);
              }}
              className="p-2.5 rounded-full hover:bg-slate-50 text-slate-900 cursor-pointer flex flex-col gap-1 justify-center items-center"
              aria-label="Open Navigation Directory"
            >
              <div className="w-5 h-[2px] bg-slate-900 rounded-full"></div>
              <div className="w-5 h-[2px] bg-slate-900 rounded-full"></div>
              <div className="w-5 h-[2px] bg-slate-900 rounded-full"></div>
            </button>
          </div>
        </div>

        {/* Global Embedded Search Panel Extension Layer */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-5">
          <div className="bg-white rounded-full border border-slate-300 shadow-sm hover:border-slate-400 focus-within:border-black focus-within:ring-1 focus-within:ring-black flex items-center p-1.5 transition-all w-full relative">
            
            {/* Drug Lookup Input */}
            <div ref={drugRef} className="flex-1 relative flex items-center pl-3 sm:pl-4">
              <Search className="text-slate-700 shrink-0 mr-2" size={20} />
              <input 
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setShowDrugDropdown(true); }}
                onFocus={() => setShowDrugDropdown(true)}
                placeholder="Search" 
                className="w-full py-2.5 text-base font-medium text-slate-900 placeholder-slate-500 bg-transparent focus:outline-none block md:hidden"
              />
              <input 
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setShowDrugDropdown(true); }}
                onFocus={() => setShowDrugDropdown(true)}
                placeholder="Search for a medication or condition" 
                className="w-full py-2.5 text-base font-medium text-slate-900 placeholder-slate-500 bg-transparent focus:outline-none hidden md:block"
              />
              
              {/* Drug Suggestion Dropdown */}
              {showDrugDropdown && filteredDrugs.length > 0 && (
                <div className="absolute left-0 right-0 top-[125%] bg-white border border-slate-200 rounded-2xl shadow-xl z-50 max-h-64 overflow-y-auto p-2 mx-1">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400 p-2">Medications Found</div>
                  {filteredDrugs.map((drug) => (
                    <button
                      key={drug.id}
                      onClick={() => { setQuery(drug.name); setShowDrugDropdown(false); handleSearchSubmit(drug.name); }}
                      className="w-full text-left p-3 hover:bg-slate-50 rounded-xl flex items-center justify-between text-sm transition-colors cursor-pointer"
                    >
                      <div>
                        <span className="font-bold text-slate-900 block">{drug.name}</span>
                        <span className="text-slate-500 text-xs">Generic: {drug.generic}</span>
                      </div>
                      <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-md">From ${drug.lowestPrice.toFixed(2)}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="hidden md:block h-8 w-[1px] bg-slate-200 mx-2"></div>

            {/* Geographic Filter Selection Area */}
            <div ref={locRef} className="hidden md:flex relative items-center px-2 w-64">
              <MapPin className="text-slate-600 shrink-0 mr-1.5" size={18} />
              <input 
                type="text"
                readOnly
                value={locationQuery}
                onClick={() => setShowLocDropdown(!showLocDropdown)}
                className="w-full py-2 text-sm font-bold text-slate-700 cursor-pointer focus:outline-none bg-transparent"
              />
              
              {showLocDropdown && (
                <div className="absolute left-0 right-0 top-[125%] bg-white border border-slate-200 rounded-xl shadow-xl z-50 p-2 space-y-1">
                  {MOCK_LOCATIONS.map((loc, lIdx) => (
                    <button
                      key={lIdx}
                      onClick={() => { setLocationQuery(loc); setShowLocDropdown(false); }}
                      className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg transition-all cursor-pointer"
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={() => handleSearchSubmit()}
              className="bg-black hover:bg-slate-800 text-white font-bold text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-1.5 transition-all shrink-0 cursor-pointer"
            >
              <Search size={16} className="hidden sm:inline" />
              <span>Start saving</span>
            </button>
          </div>

          {/* UPDATED: Horizontal Scroll Carousel Row without Header on Mobile */}
          <div className="mt-4 px-4 md:px-2 flex items-center justify-start md:justify-center gap-x-3 overflow-x-auto flex-nowrap whitespace-nowrap text-xs text-slate-800 font-medium w-full scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <span className="font-bold text-slate-900 shrink-0 hidden md:inline">
              Popular searches:
            </span>
            {POPULAR_SEARCH_KEYWORDS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const sanitizedName = item.name.replace(/[™®]/g, '');
                  setQuery(sanitizedName);
                  handleSearchSubmit(sanitizedName);
                }}
                className="hover:text-black transition-colors cursor-pointer border-b border-dashed border-slate-400 hover:border-transparent py-0.5 shrink-0"
              >
                {item.name}
              </button>
            ))}
          </div>

        </div>

      </header>

      {/* 3. MOBILE HAMBURGER MENU DRAWER */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 text-left animate-fadeIn">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-xs" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute top-0 right-0 bottom-0 w-full max-w-[340px] bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-2">
                <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  Welcome to Jonas<span className="text-primary">Rx</span>
                </span>
                <button onClick={() => setIsMenuOpen(false)} className="p-1 rounded-full hover:bg-slate-100 text-slate-900">
                  <X size={22} className="stroke-[2.5]" />
                </button>
              </div>

              <div onClick={() => handleNavClick('/telehealth')} className="p-3 rounded-xl bg-gradient-to-r from-blue-50 via-pink-50/40 to-white border border-primary/10 flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-xs border border-slate-100 flex items-center justify-center text-primary shrink-0">
                    <Pill size={18} className="rotate-45" />
                  </div>
                  <span className="text-[13px] font-bold text-slate-900 tracking-tight">Effective weight loss treatment</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-white shrink-0">
                  <ChevronRight size={14} className="stroke-[3]" />
                </div>
              </div>

              <div className="space-y-1 pt-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.path)}
                    className="w-full flex items-center justify-between py-3.5 px-3 rounded-lg hover:bg-slate-50 font-bold text-slate-800 text-[13px] text-left group"
                  >
                    <span className="flex items-center gap-3">
                      {link.name === 'Home' && <Pill size={16} className="text-slate-400" />}
                      {link.name === 'Prescription savings' && <Pill size={16} className="text-slate-400" />}
                      {link.name === 'Online care' && <Stethoscope size={16} className="text-slate-400" />}
                      {link.name === 'Health info' && <HelpCircle size={16} className="text-slate-400" />}
                      {link.name === 'Companion' && <Sparkles size={16} className="text-slate-400" />}
                      <span>{link.name}</span>
                    </span>
                    <ChevronRight size={16} className="text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}