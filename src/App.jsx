import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

// Temporary fallback placeholder component layout blocks for validation
const Placeholder = ({ name }) => (
  <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-24 text-center text-slate-500 font-sans font-bold">
    {name} Page View Context Vector — Structural Core Active.
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col justify-between overflow-x-hidden selection:bg-primary/10 selection:text-primary">
        <div>
          {/* Global Top Navigation Layout */}
          <Navbar />
          
          {/* Functional Dynamic Core System Views */}
          <Routes>
            {/* Direct Home Component Mount */}
            <Route path="/" element={<Home />} />
            
            {/* System Placeholder Routes */}
            <Route path="/search" element={<Placeholder name="Prescription Search Results" />} />
            <Route path="/telehealth" element={<Placeholder name="Telehealth Clinical Landing" />} />
            <Route path="/articles" element={<Placeholder name="Health Knowledge Library Base" />} />
            <Route path="/membership" element={<Placeholder name="JonasRx Gold Membership Subscriptions" />} />
            <Route path="/pricing" element={<Placeholder name="Standard Ledger Pricing Matrix" />} />
            <Route path="/login" element={<Placeholder name="Account Gateway Entry Login" />} />
            <Route path="/register" element={<Placeholder name="Account Generation Engine Register" />} />
            
            {/* Catch-all Routing Strategy */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        
        {/* Global Bottom Footer Layout */}
        <Footer />
      </div>
    </Router>
  );
}