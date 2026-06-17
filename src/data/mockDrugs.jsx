export const MOCK_DRUGS = [
  { id: 'd1', name: 'Lipitor', generic: 'Atorvastatin', type: 'Cholesterol', popular: true, averagePrice: 142.00, lowestPrice: 12.50 },
  { id: 'd2', name: 'Amoxicillin', generic: 'Amoxicillin', type: 'Antibiotic', popular: true, averagePrice: 28.00, lowestPrice: 4.20 },
  { id: 'd3', name: 'Metformin', generic: 'Metformin HCL', type: 'Diabetes', popular: true, averagePrice: 48.00, lowestPrice: 6.00 },
  { id: 'd4', name: 'Adderall', generic: 'Dextroamphetamine', type: 'ADHD', popular: true, averagePrice: 210.00, lowestPrice: 34.90 },
  { id: 'd5', name: 'Albuterol', generic: 'Albuterol Sulfate', type: 'Asthma', popular: true, averagePrice: 65.00, lowestPrice: 18.00 },
  { id: 'd6', name: 'Synthroid', generic: 'Levothyroxine', type: 'Thyroid', popular: false, averagePrice: 52.00, lowestPrice: 11.20 },
  { id: 'd7', name: 'Zoloft', generic: 'Sertraline HCL', type: 'Antidepressant', popular: false, averagePrice: 94.00, lowestPrice: 8.50 },
  { id: 'd8', name: 'Lisinospril', generic: 'Lisinopril', type: 'Blood Pressure', popular: false, averagePrice: 32.00, lowestPrice: 5.00 }
];

export const MOCK_LOCATIONS = [
  'Sowutoum, Accra',
  'Pokuase, Greater Accra',
  'East Legon, Accra',
  'Adabraka, Accra',
  'Kumasi Central, Ashanti'
];

export const MOCK_PHARMACY_PRICES = [
  { id: 'p1', name: 'CVS Pharmacy', price: 12.50, distance: '0.8 miles', availability: 'In Stock', tier: 'Preferred' },
  { id: 'p2', name: 'Walgreens', price: 15.20, distance: '1.4 miles', availability: 'In Stock', tier: 'Standard' },
  { id: 'p3', name: 'Walmart Pharmacy', price: 14.00, distance: '2.3 miles', availability: 'In Stock', tier: 'Preferred' },
  { id: 'p4', name: 'Rite Aid', price: 18.90, distance: '2.9 miles', availability: 'Low Stock', tier: 'Standard' },
  { id: 'p5', name: 'Costco Pharmacy', price: 11.90, distance: '4.1 miles', availability: 'In Stock', tier: 'Preferred' }
];

export const MOCK_TELEHEALTH_SERVICES = [
  { id: 't1', name: 'Weight Loss Clinic', description: 'Consult with clinical practitioners for modern GLP-1 therapy plans.', cost: '$49', duration: '15 min chat' },
  { id: 't2', name: 'Hair Loss Solutions', description: 'Prescription medical treatments for male and female hair thinning patterns.', cost: '$29', duration: 'Online form review' },
  { id: 't3', name: 'Skincare Routine', description: 'Acne, rosacea, and anti-aging treatments mapped by certified dermatologists.', cost: '$35', duration: 'Photo upload diagnosis' },
  { id: 't4', name: 'Womens Health', description: 'Birth control distribution, UTI instant relief, and private wellness tracks.', cost: '$39', duration: '24/7 on-demand care' },
  { id: 't5', name: 'Mens Health', description: 'Performance treatments and discrete cardiovascular health screenings.', cost: '$39', duration: 'Fast script processing' },
  { id: 't6', name: 'Mental Well-being', description: 'Anxiety, stress management, and ongoing therapeutic care counseling.', cost: '$59', duration: 'Video or voice session' }
];

export const MOCK_ARTICLES = [
  { id: 'a1', title: 'Understanding GLP-1 Medications for Weight Management', category: 'Weight Loss', author: 'Dr. Sarah Benson, MD', readTime: '5 min read', date: 'June 12, 2026', snippet: 'An in-depth evaluation of modern clinical therapies, outcomes, and safety parameters.' },
  { id: 'a2', title: 'Top 5 Common Interactions with Standard Blood Pressure Meds', category: 'Cardiology', author: 'James Cole, PharmD', readTime: '4 min read', date: 'May 28, 2026', snippet: 'Critical safety guidelines for matching everyday supplements with prescription sheets.' },
  { id: 'a3', title: 'The Ultimate Guide to Maximizing Medicare Part D Coverage', category: 'Insurance', author: 'Ellen Vance, Healthcare Analyst', readTime: '7 min read', date: 'April 19, 2026', snippet: 'Strategic optimization rules to protect yourself from out-of-pocket coverage gaps.' }
];


export const MOCK_TESTIMONIALS = [
  { id: 'u1', name: 'Michael K.', location: 'Sowutoum, Accra', text: 'I saved over $120 on my cholesterol scripts during my first week. I just pulled up the voucher screen on my phone at checkout and it took seconds.', drug: 'Lipitor' },
  { id: 'u2', name: 'Ama A.', location: 'Pokuase, Greater Accra', text: 'As someone without premium coverage, out-of-pocket bills were stressful. JonasRx cut my chronic medication costs completely in half.', drug: 'Metformin' },
  { id: 'u3', name: 'David O.', location: 'East Legon, Accra', text: 'The telehealth portal connected me with a licensed provider in 15 minutes. Got my prescription transmitted to my local counter effortlessly.', service: 'Telehealth' }
];