import React from 'react';
import { Star, Quote, UserCheck } from 'lucide-react';
import { MOCK_TESTIMONIALS } from '../../data/mockDrugs';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white font-sans text-left border-t border-slate-200/60">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <h2 className="text-xs uppercase tracking-widest font-black text-primary">Real Patient Success stories</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-navy font-serif tracking-tight">
            Loved By Thousands of Healthy Verified Users
          </h3>
          <p className="text-slate-500 text-sm font-medium leading-relaxed">
            Discover how daily healthcare consumers are utilizing our transparent pricing metrics to protect their household budgets.
          </p>
        </div>

        {/* Testimonial Cards Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_TESTIMONIALS.map((user) => (
            <div 
              key={user.id} 
              className="bg-slate-50/60 border border-slate-200/80 p-8 rounded-card relative flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:shadow-navy/5 hover:border-primary/20 transition-all duration-300 group"
            >
              {/* Absolute Quote Asset Backdrop Graphic */}
              <Quote size={40} className="absolute top-6 right-6 text-slate-200/60 group-hover:text-primary/10 transition-colors pointer-events-none stroke-[1.5]" />

              <div className="space-y-4">
                {/* 5-Star Rating Array Rows layout wrap */}
                <div className="flex items-center gap-1 text-warning">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                </div>

                {/* Patient Written Copy Content text block */}
                <p className="text-xs text-slate-600 font-medium leading-relaxed italic relative z-10">
                  "{user.text}"
                </p>
              </div>

              {/* Patient Identity Header metadata cards element */}
              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <UserCheck size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy tracking-tight">{user.name}</h4>
                  <p className="text-[10px] text-slate-400 font-semibold">{user.location}</p>
                  <span className="inline-block mt-1 text-[9px] font-mono font-bold bg-white border border-slate-200 text-primary px-1.5 py-0.5 rounded">
                    Verified Verified Saved: {user.drug || user.service}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}