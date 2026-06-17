import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, Phone, Navigation, ArrowUpRight } from 'lucide-react';

// 1. Import your local pharmacy thumbnail assets cleanly here
import phamarcy1Img from '../../assets/phamarcy1Img.jpg'
import pharmacy2Img from '../../assets/pharmacy2Img.jpg';
import pharmacy3Img from '../../assets/pharmacy3Img.jpg';

// Localized Greater Accra Pharmacy Information Data 
const ACCRA_PHARMACIES = [
  {
    id: 'ph-accra-01',
    name: 'Ernest Chemists - Sowutoum Branch',
    location: 'Sowutoum Main Rd, Accra',
    distance: '0.8 km away',
    hours: 'Open 24 Hours',
    isOpenNow: true,
    phone: '+233 30 222 4343',
    imageUrl: phamarcy1Img
  },
  {
    id: 'ph-accra-02',
    name: 'Top Up Pharmacy - Pokuase Shopping Bazaar',
    location: 'Pokuase Interchange Highway, Accra',
    distance: '4.2 km away',
    hours: 'Closes at 10:00 PM',
    isOpenNow: true,
    phone: '+233 24 412 3456',
    imageUrl: pharmacy2Img
  },
  {
    id: 'ph-accra-03',
    name: 'Kinapharma Retail - Kwashieman Junction',
    location: 'Mallam-Kwashieman Motorway, Accra',
    distance: '2.9 km away',
    hours: 'Open Now • Closes 9:00 PM',
    isOpenNow: true,
    phone: '+233 30 224 4882',
    imageUrl: pharmacy3Img
  }
];

export default function LocalPharmacies() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200/60 font-sans text-left">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Layout Heading Text Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-xs uppercase tracking-widest font-black text-primary">Prescription Pickup Directories</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-navy font-serif tracking-tight">
              Find Partner Pharmacies Near Me
            </h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Locate authorized medical fulfillment desks and drugstores across Sowutoum, Pokuase, and Accra regions to pick up discounted medications instantly.
            </p>
          </div>

          <button 
            onClick={() => navigate('/search')}
            className="px-5 py-2.5 rounded-full bg-navy hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            Map View Directory <MapPin size={14} />
          </button>
        </div>

        {/* Responsive Pharmacies Grid Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACCRA_PHARMACIES.map((pharmacy) => (
            <div 
              key={pharmacy.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-primary/20 transition-all duration-300 group flex flex-col justify-between relative"
            >
              <div>
                {/* Pharmacy Location Image Cover */}
                <div className="w-full h-44 overflow-hidden bg-slate-100 relative">
                  <img 
                    src={pharmacy.imageUrl} 
                    alt={pharmacy.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider bg-white/95 text-slate-900 px-2.5 py-1 rounded-md shadow-xs backdrop-blur-xs">
                      <Navigation size={10} className="text-primary fill-primary/10" /> {pharmacy.distance}
                    </span>
                  </div>
                </div>

                {/* Nomenclature Descriptive Area */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-navy tracking-tight group-hover:text-primary transition-colors flex items-start justify-between gap-2 leading-snug">
                      <span>{pharmacy.name}</span>
                      <ArrowUpRight size={16} className="shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-primary mt-0.5" />
                    </h4>
                    <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                      <MapPin size={13} className="text-slate-400 shrink-0" /> {pharmacy.location}
                    </p>
                  </div>

                  {/* Operational and Contact Badges */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <Clock size={14} className="text-slate-400" />
                      <span>{pharmacy.hours}</span>
                      {pharmacy.isOpenNow && (
                        <span className="text-[10px] uppercase tracking-wide bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-black">
                          Active
                        </span>
                      )}
                    </div>
                    <a 
                      href={`tel:${pharmacy.phone}`} 
                      className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-primary transition-colors w-max"
                    >
                      <Phone size={14} className="text-slate-400" />
                      <span>{pharmacy.phone}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Footer Button Layout */}
              <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div>
                  <span className="block text-[9px] uppercase font-bold tracking-wider text-slate-400">JonasRx Pickup Care</span>
                  <span className="text-xs font-bold text-slate-800">Available Here</span>
                </div>
                <button
                  onClick={() => navigate('/search')}
                  className="px-4 py-2 text-xs font-bold bg-white border border-slate-300 hover:border-slate-900 rounded-lg transition-all cursor-pointer shadow-2xs text-slate-900"
                >
                  Select Pharmacy
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}