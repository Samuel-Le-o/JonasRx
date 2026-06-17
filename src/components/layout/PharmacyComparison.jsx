import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Landmark, ArrowRight, ShieldCheck, Info } from 'lucide-react';
import { MOCK_PHARMACY_PRICES } from '../../data/mockDrugs';

export default function PharmacyComparison() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white font-sans text-left border-t border-slate-200/60">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Header Stack */}
        <div className="max-w-2xl mb-12 space-y-3">
          <h2 className="text-xs uppercase tracking-widest font-black text-primary">Live Pricing Directory</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-navy font-serif tracking-tight">
            Compare Local Pharmacy Discount Sheets
          </h3>
          <p className="text-slate-500 text-sm font-medium leading-relaxed">
            Retail prescription pricing varies drastically by street address. Scan this verified breakdown matching standard index rates for Lipitor (Atorvastatin, 20mg, 30 tablets).
          </p>
        </div>

        {/* Swipeable Desktop Container / Cards Wrapper Grid on Mobile */}
        <div className="overflow-x-auto rounded-card border border-slate-200 shadow-sm shadow-navy/5 bg-white">
          <table className="w-full min-w-[800px] border-collapse text-left text-xs font-sans">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-navy font-bold uppercase tracking-wider text-[11px]">
                <th className="py-4 px-6">Pharmacy Outlet</th>
                <th className="py-4 px-4">Network Tier</th>
                <th className="py-4 px-4">Proximity Distance</th>
                <th className="py-4 px-4">Availability Index</th>
                <th className="py-4 px-4 text-right">Coupon Price</th>
                <th className="py-4 px-6 text-center">Action Plan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
              {MOCK_PHARMACY_PRICES.map((pharmacy) => (
                <tr key={pharmacy.id} className="hover:bg-slate-50/80 transition-colors group">
                  
                  {/* Pharmacy Identity column block */}
                  <td className="py-4 px-6 font-bold text-navy text-sm flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-primary-light group-hover:text-primary transition-colors">
                      <Landmark size={15} />
                    </div>
                    {pharmacy.name}
                  </td>

                  {/* Pricing Network Tier Descriptor */}
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      pharmacy.tier === 'Preferred' ? 'bg-success/10 text-success' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {pharmacy.tier}
                    </span>
                  </td>

                  {/* Proximity Distance calculation placeholder value */}
                  <td className="py-4 px-4 text-slate-500 text-xs font-semibold">
                    {pharmacy.distance}
                  </td>

                  {/* Live availability tracker status info */}
                  <td className="py-4 px-4">
                    <span className={`text-[11px] font-semibold ${
                      pharmacy.availability === 'In Stock' ? 'text-slate-600' : 'text-warning'
                    }`}>
                      {pharmacy.availability}
                    </span>
                  </td>

                  {/* Calculated Special Coupon Valuation Column pricing index matrix */}
                  <td className="py-4 px-4 text-right">
                    <span className="font-mono text-base font-black text-primary">${pharmacy.price.toFixed(2)}</span>
                  </td>

                  {/* Dispatch Route Call-to-action button trigger element frame */}
                  <td className="py-4 px-6 text-center">
                    <button 
                      onClick={() => navigate('/search')}
                      className="inline-flex items-center gap-1 px-4 py-2 bg-slate-50 border border-slate-200 hover:bg-primary hover:text-white hover:border-primary text-navy font-bold text-[11px] uppercase tracking-wider rounded-button transition-all duration-200 shadow-xs cursor-pointer"
                    >
                      Select Voucher <ArrowRight size={12} />
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Small Print Legal Verification Notice Frame layout text area */}
        <div className="flex items-start gap-2 text-[11px] text-slate-400 font-medium leading-relaxed mt-4 max-w-3xl">
          <Info size={14} className="shrink-0 mt-0.5 text-slate-400" />
          <p>Pricing matrices represent real-time indexing records updated dynamically. National aggregate retail values without dynamic discount access can trace high marks exceeding $142.00 across unverified terminal collection pipelines.</p>
        </div>

      </div>
    </section>
  );
}