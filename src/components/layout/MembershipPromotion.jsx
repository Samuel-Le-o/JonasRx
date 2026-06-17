import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Wallet } from 'lucide-react';

export default function MembershipPromotion() {
  const navigate = useNavigate();
  const [monthlySpend, setMonthlySpend] = useState(60);

  // Math models tracking standard JonasRx savings matrices (Gold tier matches ~85% average discount reduction profiles)
  const calculatedSavings = Math.round(monthlySpend * 0.85);
  const annualSavings = calculatedSavings * 12;

  return (
    <section className="py-24 bg-gradient-to-br from-navy via-[#0f2856] to-navy text-white font-sans text-left overflow-hidden relative">
      
      {/* Background Graphic Blur Accents */}
      <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Informational Value Proposition Block */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/10 px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase text-primary-light">
            <Sparkles size={12} className="text-warning fill-warning" /> JonasRx Gold Subscriptions
          </div>
          
          <h3 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight leading-tight">
            Unlock Maximum Discounts With Our Gold Membership
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
            Take healthcare savings even further. JonasRx Gold offers individual and family membership structures that slash copays to single digits across thousands of standard medications.
          </p>

          <ul className="space-y-3 pt-2 text-xs font-semibold text-slate-200">
            <li className="flex items-center gap-2.5"><CheckCircle2 size={16} className="text-success fill-success/10" /> Access to elite pricing sheets (Up to 95% off retail lists)</li>
            <li className="flex items-center gap-2.5"><CheckCircle2 size={16} className="text-success fill-success/10" /> Home delivery integrations with completely free standard mail shipping</li>
            <li className="flex items-center gap-2.5"><CheckCircle2 size={16} className="text-success fill-success/10" /> Up to 50% off professional on-demand telehealth virtual visits</li>
          </ul>

          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button 
              onClick={() => navigate('/membership')}
              className="px-6 py-3 rounded-button bg-primary hover:bg-blue-600 text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-primary/20 flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
            >
              Try Gold Free for 30 Days <ArrowRight size={14} />
            </button>
            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1"><ShieldCheck size={14} className="text-slate-400" /> Cancel online anytime securely</span>
          </div>
        </div>

        {/* Right Interactive Core Savings Calculator Module Wrapper */}
        <div className="lg:col-span-6 bg-white text-slate-900 border border-slate-200 p-8 rounded-card shadow-2xl relative">
          
          <div className="absolute top-0 left-10 right-10 h-[3px] bg-primary rounded-full"></div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 text-navy">
              <Wallet size={20} className="text-primary" />
              <h4 className="font-bold text-sm uppercase tracking-wider">Dynamic Savings Estimator</h4>
            </div>

            {/* Slider Component Elements Input Grid Stack */}
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <label className="text-xs font-bold text-slate-600">Current Monthly Prescription Expenses:</label>
                <span className="font-mono text-xl font-black text-navy">${monthlySpend}</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="300" 
                step="5"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 font-bold">
                <span>$10</span>
                <span>$150</span>
                <span>$300+</span>
              </div>
            </div>

            {/* Live Interactive Calculation Display Box Row */}
            <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-xl grid grid-cols-2 gap-4 text-center">
              <div className="border-r border-slate-200 pr-2">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">Estimated Monthly Cut</span>
                <span className="font-mono text-2xl font-black text-primary">${calculatedSavings}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">Retained Cash Per Year</span>
                <span className="font-mono text-2xl font-black text-success">${annualSavings}</span>
              </div>
            </div>

            <p className="text-[10px] text-center text-slate-400 font-medium leading-normal">
              Calculations assume median comparative adjustments derived across common operational drug classes. Individual tier classifications apply at counter activation pipelines.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}