import React, { useState } from 'react';
import { Mail, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-slate-50 font-sans border-t border-slate-200/60">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="bg-navy rounded-[32px] p-8 md:p-12 lg:p-16 border border-slate-800 text-white relative overflow-hidden shadow-2xl text-center md:text-left">
          
          {/* Subtle Background Radial Aura Graphic glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Title Copy Typography Text blocks */}
            <div className="lg:col-span-6 space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight">
                Stay Ahead On Smarter Health Savings
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed max-w-lg">
                Join over 50,000 active subscribers receiving weekly prescription coupon updates, pharmacy network alerts, and verified clinical advice direct to their inbox.
              </p>
            </div>

            {/* Interactive Subscription Form Interface Layer element */}
            <div className="lg:col-span-6 w-full">
              {!submitted ? (
                <form onSubmit={handleSubscribe} className="space-y-3 max-w-xl mx-auto lg:ml-auto">
                  <div className="bg-white/5 border border-white/10 p-2 rounded-2xl flex flex-col sm:flex-row items-center gap-2 focus-within:border-primary/50 transition-colors">
                    <div className="flex items-center gap-2 pl-3 w-full py-2 sm:py-0">
                      <Mail className="text-slate-400 shrink-0" size={18} />
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your personal email address..." 
                        className="w-full bg-transparent border-none text-sm font-semibold text-white placeholder-slate-400 focus:outline-none"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary hover:bg-blue-600 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      Subscribe Now <ArrowRight size={14} />
                    </button>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-4 text-[10px] text-slate-400 font-medium pl-1">
                    <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-success" /> Spam-Free Transmissions</span>
                    <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-success" /> Opt-out securely with one click</span>
                  </div>
                </form>
              ) : (
                <div className="bg-white/5 border border-success/30 p-6 rounded-2xl max-w-xl mx-auto lg:ml-auto text-center flex flex-col items-center gap-2 animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-success/20 text-success flex items-center justify-center mb-1">
                    <CheckCircle size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-white">Subscription Registration Successful!</h4>
                  <p className="text-[11px] text-slate-300 font-medium max-w-xs">Your personal communication line has been registered. Check your inbox shortly for your first premium savings guide handbook.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}