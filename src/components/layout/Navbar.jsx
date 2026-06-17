import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, User, ShieldCheck, ArrowRight, Activity } from 'lucide-react';

const NAVIGATION_ITEMS = [
  {
    label: 'Prescription Savings',
    path: '/search',
    hasMegaMenu: true,
    megaMenuContent: {
      featured: { title: 'Popular Searches', items: ['Lipitor', 'Amoxicillin', 'Metformin', 'Adderall', 'Albuterol'] },
      categories: [
        { title: 'Save on Meds', links: [{ n: 'Search Prices', p: '/search' }, { n: 'How Coupons Work', p: '/about' }, { n: 'Pharmacy Finder', p: '/search' }] },
        { title: 'Programs', links: [{ n: 'JonasRx Gold Membership', p: '/membership' }, { n: 'Medicare Guide', p: '/help' }, { n: 'Vaccine Pricing', p: '/search' }] }
      ]
    }
  },
  {
    label: 'Telehealth Care',
    path: '/telehealth',
    hasMegaMenu: true,
    megaMenuContent: {
      featured: { title: 'Urgent Care', items: ['24/7 Online Visits', 'Primary Care Track', 'Mental Health Support'] },
      categories: [
        { title: 'Popular Treatments', links: [{ n: 'Weight Loss Clinic', p: '/telehealth/weight-loss' }, { n: 'Hair Loss Solutions', p: '/telehealth/hair-loss' }, { n: 'Skincare Consultation', p: '/telehealth/skin-care' }] },
        { title: 'Specialty Medicine', links: [{ n: 'Womens Health', p: '/telehealth' }, { n: 'Mens Health', p: '/telehealth' }, { n: 'Mental Well-being', p: '/telehealth' }] }
      ]
    }
  },
  { label: 'Health Articles', path: '/articles', hasMegaMenu: false },
  { label: 'Membership', path: '/membership', hasMegaMenu: false },
  { label: 'Pricing', path: '/pricing', hasMegaMenu: false }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawers when navigating routes
  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
  }, [location]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans border-b ${
        isScrolled ? 'bg-white shadow-md border-slate-200/80 py-3' : 'bg-white border-transparent py-4'
      }`}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Identity Branding Logo */}
          <Link to="/" className="flex items-center gap-2 text-primary font-bold text-2xl tracking-tight select-none">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-md shadow-primary/20">
              <Activity size={22} className="stroke-[2.5]" />
            </div>
            <span className="text-navy font-bold text-xl font-serif tracking-normal">Jonas<span className="text-primary font-sans font-extrabold text-2xl">Rx</span></span>
          </Link>

          {/* Desktop Core Desktop Interlinks System */}
          <div className="hidden lg:flex items-center gap-1">
            {NAVIGATION_ITEMS.map((item, idx) => (
              <div 
                key={idx} 
                className="relative"
                onMouseEnter={() => item.hasMegaMenu && setActiveMenu(idx)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link 
                  to={item.path} 
                  className={`px-4 py-2 rounded-xl text-[15px] font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                    location.pathname.startsWith(item.path) ? 'text-primary bg-primary-light/50 font-semibold' : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {item.hasMegaMenu && <ChevronDown size={14} className={`transition-transform duration-200 ${activeMenu === idx ? 'rotate-180 text-primary' : 'text-slate-400'}`} />}
                </Link>

                {/* Desktop Mega Menu Dropdown */}
                <AnimatePresence>
                  {item.hasMegaMenu && activeMenu === idx && (
                    <motion.div 
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[560px] dropdown-container drop-shadow-2xl z-50"
                    >
                      <div className="bg-white rounded-card border border-slate-200 p-6 grid grid-cols-3 gap-6 shadow-2xl relative">
                        <div className="absolute top-0 left-10 right-10 h-[2px] bg-primary rounded-full"></div>
                        
                        <div className="col-span-1 bg-slate-50/80 p-4 rounded-xl border border-slate-100">
                          <h5 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-3">{item.megaMenuContent.featured.title}</h5>
                          <ul className="space-y-2">
                            {item.megaMenuContent.featured.items.map((fItem, fIdx) => (
                              <li key={fIdx} className="text-xs font-semibold text-navy hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span> {fItem}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="col-span-2 grid grid-cols-2 gap-4">
                          {item.megaMenuContent.categories.map((cat, catIdx) => (
                            <div key={catIdx} className="space-y-3">
                              <h5 className="font-bold text-xs uppercase tracking-wider text-slate-900 font-sans">{cat.title}</h5>
                              <ul className="space-y-2">
                                {cat.links.map((lnk, lnkIdx) => (
                                  <li key={lnkIdx}>
                                    <Link to={lnk.p} className="text-xs text-slate-600 hover:text-primary font-medium transition-colors block py-0.5">{lnk.n}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                    )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Interface CTAs Layout */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login" className="px-4 py-2 rounded-xl text-[15px] font-medium text-slate-700 hover:text-primary hover:bg-slate-50 transition-all">Sign In</Link>
            <Link to="/register" className="px-4 py-2 rounded-xl text-[15px] font-medium text-white bg-navy hover:bg-slate-800 transition-all shadow-sm">Create Account</Link>
            <Link to="/search" className="px-4 py-2.5 rounded-button text-[15px] font-bold text-white bg-primary hover:bg-blue-600 shadow-md shadow-primary/10 transition-all flex items-center gap-1.5">
              Get Started <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile Shell Menu Access Trigger Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-all cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Navigation Panel Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy/40 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="space-y-6 pt-16">
                <div className="flex flex-col gap-2">
                  {NAVIGATION_ITEMS.map((item, idx) => (
                    <Link 
                      key={idx} 
                      to={item.path}
                      className="p-3 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-xl block border-b border-slate-100/60"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-100">
                <Link to="/login" className="w-full py-3 rounded-button border border-slate-200 text-[15px] font-bold text-slate-900 text-center block hover:bg-slate-50 transition-colors">Sign In</Link>
                <Link to="/register" className="w-full py-3 rounded-button bg-navy text-white text-[15px] font-bold text-center block hover:bg-slate-800 transition-all">Create Account</Link>
                <Link to="/search" className="w-full py-3.5 rounded-button bg-primary text-white text-[15px] font-black text-center block shadow-lg shadow-primary/20 transition-all">Get Savings Coupons</Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Structural Offset Content Wrapper spacer layout block */}
      <div className="h-[73px]"></div>
    </>
  );
}