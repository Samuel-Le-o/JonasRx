import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowUpRight, User, Calendar } from 'lucide-react';
import { MOCK_ARTICLES } from '../../data/mockDrugs';

export default function HealthcareContent() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white font-sans text-left">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Section Header Text Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-xs uppercase tracking-widest font-black text-primary">Clinical Knowledge Library</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-navy font-serif tracking-tight">
              Verified Medical Insights & News
            </h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Read authoritative analyses written by practicing doctors, clinical researchers, and pharmacologists to better understand your wellness tracks.
            </p>
          </div>

          <button 
            onClick={() => navigate('/articles')}
            className="group flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-blue-700 transition-colors shrink-0 cursor-pointer"
          >
            Explore Health Library <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 3-Column Editorial Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_ARTICLES.map((article) => (
            <article 
              key={article.id}
              onClick={() => navigate('/articles')}
              className="bg-slate-50/60 border border-slate-200/80 rounded-card p-6 flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:shadow-navy/5 hover:border-primary/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="space-y-4">
                {/* Category Indicator Tag block layout */}
                <span className="inline-block text-[10px] font-black uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-1 rounded-md">
                  {article.category}
                </span>

                {/* Article Core Headings Structure */}
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-navy tracking-tight group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {article.snippet}
                  </p>
                </div>
              </div>

              {/* Author & Read-time Footer Metadata blocks */}
              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                <div className="flex items-center gap-1.5 truncate max-w-[65%]">
                  <User size={13} className="text-slate-400 shrink-0" />
                  <span className="truncate text-slate-600">{article.author}</span>
                </div>
                <div className="flex items-center gap-1 shrink-0 font-mono text-[10px]">
                  <Calendar size={12} /> {article.readTime}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}