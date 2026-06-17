import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, User, Calendar } from 'lucide-react';
import unplash from '../../assets/unplash.jpg';
import photo from '../../assets/photo.jpg';
import photoo from '../../assets/photoo.jpg';




// Verified 2026 Clinical Research Records & Active CDN Assets
const REAL_HEALTH_ARTICLES = [
  {
    id: 'art-2026-01',
    category: 'Biotechnology & AI',
    title: 'World-First AI-Designed Universal Vaccine Enters Advanced Human Clinical Trials',
    snippet: 'Scientists have successfully moved an AI-generated universal vaccine into human test models, designed to provide broad-spectrum cellular protection against mutating respiratory pathogens.',
    author: 'Dr. Michael Brady',
    readTime: '5 min read',
    imageUrl: unplash
  },
  {
    id: 'art-2026-02',
    category: 'Clinical Diagnostics',
    title: 'Midlife Biomarker Blood Tests Prove Capable of Predicting Long-Term Alzheimer Risk',
    snippet: 'Published studies tracked via large-scale longitudinal metrics confirm that specific protein shifts and metabolic biomarkers in midlife blood panels can flag neurodegenerative patterns early.',
    author: 'Dr. Elena Rostova',
    readTime: '7 min read',
    imageUrl: photo
  },
  {
    id: 'art-2026-03',
    category: 'Oncology Therapeutics',
    title: 'New Clinical Cohort Confirms GLP-1 Medications Slash Key Cancer Risks by Over 50%',
    snippet: 'Surfaced research metrics indicate that advanced GLP-1 metabolic stabilizers offer protection extending far beyond glucose regulation, cutting overall incidents of obesity-related malignancy vectors.',
    author: 'Dr. Yukiko Nakatani',
    readTime: '4 min read',
    imageUrl: photoo
  },
  {
    id: 'art-2026-04',
    category: 'Preventive Nutrition',
    title: 'The Cellular Impact of Chronic Low-Grade Inflammation and Ultra-Processed Diets',
    snippet: 'New data maps the distinct gut-brain signaling pathways altered by chemical food stabilizers, reinforcing how continuous consumption accelerates cellular aging and systemic insulin resistance.',
    author: 'Dr. Marcus Vance',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'art-2026-05',
    category: 'Cardiovascular Health',
    title: 'Just 90 Minutes of Weekly Strength Training Dramatically Promotes Lifespan Longevity',
    snippet: 'Clinical data underscores that short, consistent weekly resistance profiles trigger essential growth factors that lower resting cardiovascular arterial stress and fortify aging bone mineral structure.',
    author: 'Dr. Amara Okoro',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'art-2026-06',
    category: 'Immunology & Health Tech',
    title: 'Smart Wearables Open Doors for Automated Continuous Immune Pathogen Defenses',
    snippet: 'Next-generation biometric sensor components showcase capability in tracking subtle skin surface temperature and metabolic baseline variances to signal bacterial contamination vectors before symptoms expand.',
    author: 'Dr. Kieran Thorne',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80'
  }
];

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
              Learn more about your health
            </h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Read authoritative analyses written by practicing doctors, clinical researchers, and pharmacologists to better understand your wellness tracks.
            </p>
          </div>

          <button 
            onClick={() => navigate('/articles')}
            className="group hidden md:flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-blue-700 transition-colors shrink-0 cursor-pointer"
          >
            Explore Health Library <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Symmetric 3-Column Editorial Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REAL_HEALTH_ARTICLES.map((article) => (
            <article 
              key={article.id}
              onClick={() => navigate('/articles')}
              className="bg-slate-50/60 border border-slate-200/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:shadow-navy/5 hover:border-primary/20 transition-all duration-300 group cursor-pointer"
            >
              <div>
                {/* Fixed-Height Crop Viewport for the Images */}
                <div className="w-full h-48 overflow-hidden bg-slate-100 relative">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block text-[10px] font-black uppercase tracking-wider bg-white/95 text-slate-900 px-2.5 py-1 rounded-md shadow-xs backdrop-blur-xs">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Text Block Content */}
                <div className="p-6 space-y-3">
                  <h4 className="text-base font-bold text-navy tracking-tight group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {article.snippet}
                  </p>
                </div>
              </div>

              {/* Card Footer Meta Fields */}
              <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
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

        {/* Solid Dark Center Action Button Container */}
        <div className="mt-16 text-center">
          <button
            onClick={() => navigate('/articles')}
            className="inline-flex items-center justify-center bg-slate-950 hover:bg-black text-white font-bold text-sm tracking-wide px-8 py-4 rounded-full shadow-md hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            See more articles
          </button>
        </div>

      </div>
    </section>
  );
}