import React from 'react';
import Hero from '../components/layout/Hero';
import TrustStats from '../components/layout/TrustStats';
import HowItWorks from '../components/layout/HowItWorks';
import FeaturedSavings from '../components/layout/FeaturedSavings';
import PharmacyComparison from '../components/layout/PharmacyComparison';
import TelehealthServices from '../components/layout/TelehealthServices';
import HealthcareContent from '../components/layout/HealthcareContent';
import MembershipPromotion from '../components/layout/MembershipPromotion';
import Testimonials from '../components/layout/Testimonials'; // <-- Add Import
import Newsletter from '../components/layout/Newsletter'; // <-- Add Import

export default function Home() {
  return (
    <div className="animate-fadeIn">
      {/* Section 1: Search Input Engine Layer */}
      <Hero />
      
      {/* Section 2: Corporate Trust Ledger System Matrix */}
      {/* <TrustStats /> */}

      {/* Section 3: Step-by-Step Patient Operational Flow */}
      {/* <HowItWorks /> */}

      {/* Section 4: Grid Matrix Coupon Offer Cards */}
      <FeaturedSavings />

      {/* Section 5: Real-time Pharmacy Cost Comparison Table Matrix */}
      {/* <PharmacyComparison /> */}

      {/* Section 6: Telehealth Virtual Consultation Grid Options */}
      <TelehealthServices />

      {/* Section 7: Editorial Health Knowledge Listing Layout */}
      <HealthcareContent />

      {/* Section 8: Premium Membership Tier Promotion & Interactive Calculator */}
      <MembershipPromotion />

      {/* Section 9: Verified Social Proof Testimonials Grid Matrix */}
      {/* <Testimonials /> */}

      {/* Section 10: Final Trust Engagement Newsletter Form Capture */}
      <Newsletter />
    </div>
  );
}