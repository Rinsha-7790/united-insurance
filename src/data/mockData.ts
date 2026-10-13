import { InsurancePlan, PolicyRecord } from '../types/insurance';

export const INSURANCE_PLANS: InsurancePlan[] = [
  {
    id: 'car-insurance',
    name: 'Car Insurance',
    category: 'car',
    badge: 'Most Popular',
    badgeStyle: 'popular',
    description: 'Comprehensive protection for private passenger cars against accidental collision, fire, theft, and third-party liabilities.',
    startingPrice: '₹2,094',
    pricePeriod: '/year',
    icon: 'directions_car',
    features: [
      'Zero-Depreciation rider availability',
      'Engine and gearbox protection shield',
      'Personal accident cover up to ₹15 Lakhs'
    ]
  },
  {
    id: 'two-wheeler',
    name: 'Two-Wheeler Insurance',
    category: 'two-wheeler',
    badge: 'Commuter Special',
    badgeStyle: 'special',
    description: 'Dependable safety for motorcycles, scooters, and EV two-wheelers against road hazards and unpredictable damage.',
    startingPrice: '₹538',
    pricePeriod: '/year',
    icon: 'two_wheeler',
    features: [
      'Multi-year discount packages (1 to 3 yrs)',
      'Pillion passenger liability add-on',
      'Instant inspection through phone upload'
    ]
  },
  {
    id: 'commercial-fleet',
    name: 'Commercial Fleet Insurance',
    category: 'commercial',
    badge: 'Fleet Ready',
    badgeStyle: 'fleet',
    description: 'Robust underwriting tailored for goods carriers, passenger taxis, buses, and institutional delivery fleets.',
    startingPrice: 'Fleet Scale',
    pricePeriod: 'Rates',
    icon: 'local_shipping',
    features: [
      'Fleet management multi-vehicle portal',
      'Transit cargo protection coverage',
      'Paid driver legal compensation shelter'
    ]
  },
  {
    id: 'third-party',
    name: 'Third-Party Insurance',
    category: 'car',
    badge: 'Mandatory Cover',
    badgeStyle: 'mandatory',
    description: 'Compliance-driven coverage securing against legal financial liabilities for third-party injury, death, or property damage.',
    startingPrice: 'IRDAI Fixed',
    pricePeriod: '',
    icon: 'gavel',
    features: [
      '100% legal road compliance guaranteed',
      'Unlimited liability for bodily harm',
      'Property damage cover up to ₹7.5 Lakhs'
    ]
  },
  {
    id: 'comprehensive-shield',
    name: 'Comprehensive All-Round Shield',
    category: 'comprehensive',
    badge: 'Recommended Complete Pack',
    badgeStyle: 'featured',
    isFeatured: true,
    description: 'The ultimate shield for your automobile: unites mandatory third-party liability with extensive Own Damage protection against storms, floods, riots, accidents, and theft.',
    startingPrice: '₹3,450',
    pricePeriod: '/year onwards',
    icon: 'shield',
    features: [
      'Includes Zero-Depreciation & Consumables',
      'Free 24x7 Roadside Emergency Dispatch',
      'Key Replacement & Lockout coverage',
      'Full No Claim Bonus (NCB) Retention Protect'
    ]
  }
];

export const MOCK_POLICIES: Record<string, PolicyRecord> = {
  'KL-10-AZ-1234': {
    policyNumber: 'UI-2024-884920',
    registrationNumber: 'KL-10-AZ-1234',
    vehicleName: 'Hyundai Creta SX (O) Diesel 2022',
    category: 'car',
    ownerName: 'Arjun Kumar',
    planName: 'Comprehensive All-Round Shield',
    expiryDate: '2026-10-25',
    premiumPaid: 4890,
    ncbBonus: 35,
    status: 'Expiring Soon'
  },
  'KA-01-MJ-5582': {
    policyNumber: 'UI-2024-912440',
    registrationNumber: 'KA-01-MJ-5582',
    vehicleName: 'Tata Nexon EV Max 2023',
    category: 'car',
    ownerName: 'Priya Sharma',
    planName: 'Car Insurance with Zero-Dep',
    expiryDate: '2026-11-14',
    premiumPaid: 3950,
    ncbBonus: 20,
    status: 'Active'
  },
  'KL-07-CB-9011': {
    policyNumber: 'UI-2023-441029',
    registrationNumber: 'KL-07-CB-9011',
    vehicleName: 'Royal Enfield Classic 350',
    category: 'two-wheeler',
    ownerName: 'Rahul Varma',
    planName: 'Two-Wheeler Multi-Year Protect',
    expiryDate: '2026-09-30',
    premiumPaid: 1140,
    ncbBonus: 25,
    status: 'Expired'
  }
};

export const MOCK_GARAGES = [
  { id: 'g1', name: 'Apex Premier Motors (Authorized Cashless)', city: 'Kochi', distance: '3.2 km', rating: 4.9 },
  { id: 'g2', name: 'Metro Car Care & Body Shop', city: 'Malappuram / Manjeri', distance: '1.8 km', rating: 4.8 },
  { id: 'g3', name: 'Royal Wheels Multi-Brand Workshop', city: 'Calicut', distance: '5.4 km', rating: 4.7 },
  { id: 'g4', name: 'Express Speedline Auto Garage', city: 'Bangalore East', distance: '4.1 km', rating: 4.9 }
];

export const FAQS = [
  {
    id: 1,
    question: 'What types of vehicles can I insure with United Insurance?',
    answer: 'We insure all categories of motor vehicles, including private passenger cars, electric vehicles (EVs), two-wheelers (scooters and motorbikes), and commercial transport vehicles such as cabs, vans, delivery trucks, and logistics fleets.'
  },
  {
    id: 2,
    question: 'What is comprehensive motor insurance, and what does it cover?',
    answer: 'A comprehensive insurance policy merges legal third-party liability coverage with Own Damage (OD) protection. It safeguards your vehicle against road collisions, theft, vandalism, fire, explosions, and natural catastrophes like floods or earthquakes. You can also attach optional add-ons like zero-depreciation and engine protection.'
  },
  {
    id: 3,
    question: 'How do I renew an expired or existing motor policy?',
    answer: 'You can renew directly on our website in under two minutes. Simply provide your registration number or previous policy number, verify your vehicle particulars, select any updated add-ons, and make the payment online for instant policy certificate dispatch.'
  },
  {
    id: 4,
    question: 'How do I make a cashless claim after an accident?',
    answer: 'In the event of damage, immediately call our 24/7 claims hotline or report via the claims portal. Tow or drive your car to one of our 6,500+ authorized cashless garages. Our digital surveyor reviews the damage estimation, approves work authorization, and we settle repair invoices directly with the workshop.'
  },
  {
    id: 5,
    question: 'How can I reach United Insurance customer support?',
    answer: 'Our team is available round the clock. You can dial our toll-free phone number at +91 1800 000 0000, email us at support@unitedinsurance.com, or visit our regional office in Manjeri, Kerala. We also offer live chat support through WhatsApp.'
  }
];

export const TESTIMONIALS = [
  {
    quote: '"The renewal process was delightfully straightforward. The support team responded promptly when I needed to update my vehicle registration and NCB credit transfer."',
    author: 'Arjun Kumar',
    location: 'Kerala • Sedan Owner',
    initials: 'AK',
    avatarBg: 'bg-surface-container text-primary'
  },
  {
    quote: '"Got instant roadside assistance when our SUV had an alternator issue on the highway at 11 PM. United Insurance dispatched a flatbed truck and settled repairs seamlessly!"',
    author: 'Priya Sharma',
    location: 'Bangalore • SUV Owner',
    initials: 'PS',
    avatarBg: 'bg-secondary-fixed text-primary-container'
  },
  {
    quote: '"Managing commercial insurance for our 24-vehicle delivery fleet has never been easier. Highly transparent terms, quick surveyor sign-offs, and dependable corporate support."',
    author: 'Rajesh Menon',
    location: 'Kochi • Logistics Fleet Operator',
    initials: 'RM',
    avatarBg: 'bg-surface-container-highest text-primary'
  }
];
