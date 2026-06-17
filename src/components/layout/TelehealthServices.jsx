import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, ArrowUpRight, Clock, Stethoscope } from 'lucide-react';
import { MOCK_TELEHEALTH_SERVICES } from '../../data/mockDrugs';

export default function TelehealthServices() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200/60 font-sans text-left">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Layout Heading Text Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-xs uppercase tracking-widest font-black text-primary">On-Demand Digital Clinical Care</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-navy font-serif tracking-tight">
              Skip The Waiting Room Entirely
            </h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Connect with certified, licensed medical providers online from your phone or desktop. Receive instant medication prescriptions and private wellness consultation itineraries.
            </p>
          </div>

          <button 
            onClick={() => navigate('/telehealth')}
            className="px-5 py-2.5 rounded-button bg-navy hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            Explore Telehealth Hub <Stethoscope size={14} />
          </button>
        </div>

        {/* Responsive Service Categories Flex Grid Block Core */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_TELEHEALTH_SERVICES.map((service) => (
            <div 
              key={service.id}
              onClick={() => navigate(`/telehealth`)}
              className="bg-white border border-slate-200 p-6 rounded-card shadow-xs hover:shadow-xl hover:border-primary/20 transition-all duration-300 group cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Visual Accent Badge Container row layout block */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center border border-primary/10 group-hover:scale-105 transition-transform">
                    <Activity size={18} />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-md">
                    <Clock size={12} className="text-slate-400" /> {service.duration}
                  </div>
                </div>

                {/* Nomenclature Descriptive Area */}
                <div className="space-y-2 mb-8">
                  <h4 className="text-lg font-bold text-navy tracking-tight group-hover:text-primary transition-colors flex items-center gap-1">
                    {service.name} <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-primary" />
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{service.description}</p>
                </div>
              </div>

              {/* Cost Action Footer Area Frame layout block structure */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">Consultation Cost</span>
                  <span className="text-xl font-mono font-black text-navy">{service.cost}</span>
                </div>
                <span className="text-xs font-bold text-primary group-hover:underline">Start Visit</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}