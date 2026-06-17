import React from 'react';
import { Users, Landmark, Wallet, Percent } from 'lucide-react';

const STATS_ITEMS = [
  { id: 1, icon: <Wallet className="text-primary" size={24} />, metric: '$45B+', descriptor: 'Total Customer Savings', note: 'Logged across national pharmacy transactions' },
  { id: 2, icon: <Landmark className="text-primary" size={24} />, metric: '65K+', descriptor: 'Pharmacies Connected', note: 'Instant processing network integration' },
  { id: 3, icon: <Users className="text-primary" size={24} />, metric: '22M+', descriptor: 'Monthly Active Users', note: 'Trusted healthcare consumer metrics' },
  { id: 4, icon: <Percent className="text-primary" size={24} />, metric: '80%', descriptor: 'Average Discount Index', note: 'Slashed from retail counter price sheets' }
];

export default function TrustStats() {
  return (
    <section className="bg-slate-50/60 py-16 border-y border-slate-100 font-sans">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Responsive Grid Structure Panel Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-slate-200/80 p-6 rounded-card transition-all duration-300 hover:shadow-xl hover:border-primary/20 group relative overflow-hidden text-left"
            >
              {/* Subtle Corner Graphic Hover Light Highlight */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-[40px] group-hover:bg-primary/10 transition-colors"></div>
              
              <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 mb-4 shadow-xs group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              
              <div className="space-y-1">
                <h3 className="font-mono text-3xl font-black text-navy tracking-tight">{item.metric}</h3>
                <h4 className="text-sm font-bold text-slate-900">{item.descriptor}</h4>
                <p className="text-[11px] text-slate-400 font-medium leading-normal pt-1">{item.note}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}