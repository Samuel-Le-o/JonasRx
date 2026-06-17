import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'; 
import Home from './pages/Home';
import Footer from './components/layout/Footer'; // <-- Import the built footer element

// Placeholder view elements for missing paths to allow fluent routing
const TelehealthPlaceholder = () => <div className="p-12 font-sans text-slate-500">Telehealth Hub Area Under Construction</div>;
const ArticlesPlaceholder = () => <div className="p-12 font-sans text-slate-500">Medical Knowledge Base Library Under Construction</div>;

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#F9F9FB] text-slate-900 antialiased selection:bg-primary/10">
        
        {/* Mount Global Header Elements */}
        <Navbar />

        {/* Primary Route Area - flex-grow ensures the footer stays pinned to the bottom on short pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/telehealth" element={<TelehealthPlaceholder />} />
            <Route path="/articles" element={<ArticlesPlaceholder />} />
            <Route path="/companion" element={<ArticlesPlaceholder />} />
            <Route path="/search" element={<div className="p-12 font-sans">Search Core View Interface</div>} />
            <Route path="/login" element={<div className="p-12 font-sans">Login Portal Gateway</div>} />
            <Route path="/register" element={<div className="p-12 font-sans">Registration Form Shell</div>} />
          </Routes>
        </main>

        {/* Mount Global Footer Elements */}
        <Footer />

      </div>
    </Router>
  );
}