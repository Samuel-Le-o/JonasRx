import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pill, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { MOCK_DRUGS } from '../../data/mockDrugs';

export default function FeaturedSavings() {
  const navigate = useNavigate();

  // Pick out popular items from our mock database to populate cards
  const featuredMeds = MOCK_DRUGS.filter(d => d.popular);

  const handleCardClick = (drugName) => {
    navigate(`/search?drug=${encodeURIComponent(drugName)}&loc=Sowutoum,%20Accra`);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/60 font-sans text-left">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Section Typography Title Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-xs uppercase tracking-widest font-black text-success">Verified Active Discounts</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-navy font-serif tracking-tight">
              Most Popular Patient Medication Savings
            </h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              These common prescriptions feature deep coupon cuts this week. Tap any medication to explore comprehensive pharmacy price options.
            </p>
          </div>
          
          <button 
            onClick={() => navigate('/search')}
            className="group flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-blue-700 transition-colors shrink-0 cursor-pointer"
          >
            See All Medications <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* High-Density Card Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {featuredMeds.map((med) => {
            // Calculate discount percentages dynamically
            const savingPercent = Math.round(((med.averagePrice - med.lowestPrice) / med.averagePrice) * 100);

            return (
              <div 
                key={med.id}
                onClick={() => handleCardClick(med.name)}
                className="bg-white border border-slate-200 p-5 rounded-card shadow-xs hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              >
                {/* Dynamic Corner Percentage Savings Stamp */}
                <div className="absolute top-0 right-0 bg-success/10 text-success text-[10px] font-black px-2.5 py-1 rounded-bl-xl font-mono">
                  -{savingPercent}%
                </div>

                <div>
                  {/* Miniature Pill Icon Header */}
                  <div className="w-9 h-9 rounded-lg bg-primary-light text-primary flex items-center justify-center mb-4 border border-primary/10">
                    <Pill size={16} />
                  </div>

                  {/* Nomenclature Text Block */}
                  <div className="space-y-1 mb-6">
                    <h4 className="font-bold text-navy text-base tracking-tight group-hover:text-primary transition-colors">
                      {med.name}
                    </h4>
                    <p className="text-slate-400 text-[11px] font-semibold tracking-wide uppercase truncate">
                      Gen: {med.generic}
                    </p>
                    <span className="inline-block text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                      {med.type}
                    </span>
                  </div>
                </div>

                {/* Ledger Price Comparison Interface Rows */}
                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="text-slate-400">Retail Value</span>
                    <span className="text-slate-500 font-mono line-through">${med.averagePrice.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">With Coupon</span>
                    <span className="text-lg font-mono font-black text-primary">${med.lowestPrice.toFixed(2)}</span>
                  </div>

                  {/* Micro Conversion CTA Button element wrapper */}
                  <div className="w-full py-2 bg-slate-50 group-hover:bg-primary group-hover:text-white text-navy font-bold text-[11px] uppercase tracking-wider text-center rounded-button border border-slate-200/60 group-hover:border-primary transition-all duration-200 flex items-center justify-center gap-1">
                    Get Coupon <CheckCircle2 size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}