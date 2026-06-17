import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Activity } from 'lucide-react';

const FOOTER_LINKS = [
  {
    title: 'Company',
    links: [{ n: 'About Us', p: '/about' }, { n: 'Careers', p: '/about' }, { n: 'Press & Media', p: '/about' }, { n: 'Research Center', p: '/articles' }]
  },
  {
    title: 'Services',
    links: [{ n: 'Prescription Search', p: '/search' }, { n: 'Telehealth Visits', p: '/telehealth' }, { n: 'Gold Membership', p: '/membership' }, { n: 'Discount Pricing', p: '/pricing' }]
  },
  {
    title: 'Resources',
    links: [{ n: 'Health Library', p: '/articles' }, { n: 'Medication Directory', p: '/search' }, { n: 'Savings Calculator', p: '/membership' }, { n: 'Newsletter Sign-up', p: '/about' }]
  },
  {
    title: 'Support',
    links: [{ n: 'Help Center', p: '/about' }, { n: 'Contact Support', p: '/about' }, { n: 'Pharmacy Support', p: '/about' }, { n: 'System Status', p: '/about' }]
  }
];

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300 font-sans border-t border-slate-800 pt-20 pb-12 text-left">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
        
        {/* Brand Core Column Descriptor Area */}
        <div className="col-span-2 space-y-5">
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-2xl tracking-tight select-none">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <Activity size={18} className="stroke-[2.5]" />
            </div>
            <span className="text-white font-bold text-lg font-serif">Jonas<span className="text-primary font-sans font-extrabold text-xl">Rx</span></span>
          </Link>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            JonasRx delivers clear prescription transparency and digital healthcare convenience, matching users with certified cost reductions and on-demand clinical expertise nationwide.
          </p>
          
          {/* Brand Social Links with Native SVG Graphics (Replaces Broken Lucide Icons) */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a href="#" aria-label="Facebook Link" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white text-slate-400 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            
            {/* Twitter / X */}
            <a href="#" aria-label="Twitter X Link" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white text-slate-400 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" aria-label="Instagram Link" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white text-slate-400 transition-all">
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn Link" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white text-slate-400 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Dynamic Nested Category Grid Links */}
        {FOOTER_LINKS.map((col, idx) => (
          <div key={idx} className="col-span-1 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">{col.title}</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {col.links.map((link, lIdx) => (
                <li key={lIdx}>
                  <Link to={link.p} className="hover:text-white text-slate-400 transition-colors block py-0.5">{link.n}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Trust Authorization Compliance Matrix Section Bar */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 border-t border-slate-800/80 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-[11px] font-mono tracking-wide text-slate-500">
          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800/60 px-3 py-1.5 rounded-lg text-slate-400">
            <ShieldCheck size={14} className="text-success" /> HIPAA Privacy Compliant
          </div>
          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800/60 px-3 py-1.5 rounded-lg text-slate-400">
            <ShieldCheck size={14} className="text-primary" /> Verified LegitScript Healthcare Merchant
          </div>
        </div>

        {/* Platform Ecosystem Native Store Applications Download Links */}
        <div className="flex items-center gap-3">
          <a href="#" className="block h-9 bg-slate-900 border border-slate-800 px-3 rounded-lg flex items-center gap-2 hover:border-slate-600 transition-colors">
            <div className="text-[9px] uppercase tracking-wider text-slate-500 font-mono leading-none">Get it on <span className="block text-xs font-bold text-white font-sans tracking-normal mt-0.5">Google Play</span></div>
          </a>
          <a href="#" className="block h-9 bg-slate-900 border border-slate-800 px-3 rounded-lg flex items-center gap-2 hover:border-slate-600 transition-colors">
            <div className="text-[9px] uppercase tracking-wider text-slate-500 font-mono leading-none">Download on <span className="block text-xs font-bold text-white font-sans tracking-normal mt-0.5">App Store</span></div>
          </a>
        </div>
      </div>

      {/* Legal Disclaimers & Copyright Sub-Basement */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-8 mt-8 border-t border-slate-800/40 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 leading-relaxed font-medium">
        <p>© 2026 JonasRx, Inc. All operational processing platform records reserved.</p>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Link to="/about" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
          <Link to="/about" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
          <Link to="/about" className="hover:text-slate-400 transition-colors">Ad Choices</Link>
          
        </div>
      </div>
    </footer>
  );
}