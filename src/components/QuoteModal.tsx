import React, { useState } from 'react';
import { VehicleCategory } from '../types/insurance';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialCategory
}) => {
  const [step, setStep] = useState<'calculate' | 'details' | 'success'>('calculate');
  const [vehicleType, setVehicleType] = useState<VehicleCategory>(
    initialCategory?.toLowerCase().includes('two')
      ? 'two-wheeler'
      : initialCategory?.toLowerCase().includes('commercial')
      ? 'commercial'
      : 'car'
  );
  const [year, setYear] = useState<number>(2024);
  const [regNo, setRegNo] = useState<string>('');
  const [zeroDep, setZeroDep] = useState<boolean>(true);
  const [engine, setEngine] = useState<boolean>(true);
  const [rsa, setRsa] = useState<boolean>(true);
  const [returnToInvoice, setReturnToInvoice] = useState<boolean>(false);
  const [ncbDiscount, setNcbDiscount] = useState<number>(20); // 20% default NCB

  // Step 2 Form Details
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>('Kochi, Kerala');

  // Generated policy info
  const [generatedPolicy, setGeneratedPolicy] = useState<{
    policyNo: string;
    finalAmount: number;
    issueDate: string;
    expiryDate: string;
  } | null>(null);

  if (!isOpen) return null;

  // Calculation Logic
  let basePrice = 2094;
  if (vehicleType === 'two-wheeler') basePrice = 538;
  if (vehicleType === 'commercial') basePrice = 6800;

  if (year <= 2022) {
    basePrice = Math.round(basePrice * 0.9);
  }

  let addOnTotal = 0;
  if (zeroDep) {
    addOnTotal += vehicleType === 'two-wheeler' ? 300 : vehicleType === 'commercial' ? 2400 : 1200;
  }
  if (engine) {
    addOnTotal += vehicleType === 'two-wheeler' ? 150 : vehicleType === 'commercial' ? 1100 : 650;
  }
  if (rsa) {
    addOnTotal += vehicleType === 'two-wheeler' ? 120 : vehicleType === 'commercial' ? 800 : 350;
  }
  if (returnToInvoice) {
    addOnTotal += vehicleType === 'two-wheeler' ? 220 : vehicleType === 'commercial' ? 1400 : 750;
  }

  const ncbSavings = Math.round((basePrice * ncbDiscount) / 100);
  const subtotal = Math.max(basePrice - ncbSavings + addOnTotal, 450);
  const gstAmount = Math.round(subtotal * 0.18);
  const totalAmount = subtotal + gstAmount;

  const handleProceedToDetails = () => {
    setStep('details');
  };

  const handleIssuePolicy = (e: React.FormEvent) => {
    e.preventDefault();
    const policyNum = `UI-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    const today = new Date();
    const expiry = new Date();
    expiry.setFullYear(today.getFullYear() + 1);

    setGeneratedPolicy({
      policyNo: policyNum,
      finalAmount: totalAmount,
      issueDate: today.toISOString().split('T')[0],
      expiryDate: expiry.toISOString().split('T')[0]
    });
    setStep('success');
  };

  const resetAndClose = () => {
    setStep('calculate');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-surface-container-lowest w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col my-8 border border-surface-container-high">
        {/* Header */}
        <div className="bg-primary text-on-primary p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-error flex items-center justify-center text-on-error shadow-sm">
              <span className="material-symbols-outlined text-[22px]">calculate</span>
            </div>
            <div>
              <h3 className="font-headline text-[19px] font-bold text-surface-container-lowest leading-tight">
                {step === 'calculate' && 'Instant Quote Calculator'}
                {step === 'details' && 'Vehicle & Policyholder Information'}
                {step === 'success' && 'Policy Document Issued'}
              </h3>
              <p className="text-[13px] text-surface-container-high">
                {step === 'calculate' && 'Real-time premium calculation under IRDAI guidelines'}
                {step === 'details' && 'Step 2 of 2: Instant certificate generation'}
                {step === 'success' && 'Official policy schedule active immediately'}
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="w-8 h-8 rounded-full bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-surface-container-lowest flex items-center justify-center transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Step 1: Calculate */}
        {step === 'calculate' && (
          <div className="p-6 md:p-8 flex flex-col gap-6 max-h-[78vh] overflow-y-auto">
            {/* Category tabs */}
            <div>
              <label className="text-[12px] font-bold text-primary uppercase tracking-wider block mb-2">
                Vehicle Category
              </label>
              <div className="grid grid-cols-3 gap-2 p-1 bg-surface-container rounded-xl">
                <button
                  type="button"
                  onClick={() => setVehicleType('car')}
                  className={`py-2.5 px-3 rounded-lg text-[13px] font-semibold transition-all flex items-center justify-center gap-2 ${
                    vehicleType === 'car'
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">directions_car</span>
                  <span>Private Car</span>
                </button>
                <button
                  type="button"
                  onClick={() => setVehicleType('two-wheeler')}
                  className={`py-2.5 px-3 rounded-lg text-[13px] font-semibold transition-all flex items-center justify-center gap-2 ${
                    vehicleType === 'two-wheeler'
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">two_wheeler</span>
                  <span>Two-Wheeler</span>
                </button>
                <button
                  type="button"
                  onClick={() => setVehicleType('commercial')}
                  className={`py-2.5 px-3 rounded-lg text-[13px] font-semibold transition-all flex items-center justify-center gap-2 ${
                    vehicleType === 'commercial'
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                  <span>Commercial</span>
                </button>
              </div>
            </div>

            {/* Year & Reg Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-primary">Manufacturing Year</label>
                <select
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low font-medium text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option value={2025}>2025 (Brand New)</option>
                  <option value={2024}>2024</option>
                  <option value={2023}>2023</option>
                  <option value={2022}>2022</option>
                  <option value={2020}>2020 or Older</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-primary">Registration Number (Optional)</label>
                <input
                  type="text"
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value.toUpperCase())}
                  placeholder="e.g. KL-10-AZ-1234"
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low font-medium text-[14px] text-on-surface uppercase focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>

            {/* NCB Discount Selection */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[12px] font-bold text-primary">Existing No Claim Bonus (NCB)</label>
                <span className="text-[12px] font-semibold text-secondary">{ncbDiscount}% Discount Applied</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[0, 20, 35, 50].map((bonus) => (
                  <button
                    key={bonus}
                    type="button"
                    onClick={() => setNcbDiscount(bonus)}
                    className={`py-2 rounded-lg text-[13px] font-semibold border transition-all ${
                      ncbDiscount === bonus
                        ? 'bg-secondary text-on-secondary border-secondary'
                        : 'border-[#cbd5e1] text-on-surface hover:bg-surface-container-low'
                    }`}
                  >
                    {bonus === 0 ? '0% (New)' : `${bonus}% NCB`}
                  </button>
                ))}
              </div>
            </div>

            {/* Add-on Toggles */}
            <div className="flex flex-col gap-2.5 pt-2">
              <span className="text-[12px] font-bold text-primary uppercase tracking-wider">
                Select Desired Add-ons
              </span>

              <label className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors border border-transparent hover:border-surface-container-high">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={zeroDep}
                    onChange={(e) => setZeroDep(e.target.checked)}
                    className="w-4 h-4 rounded text-primary accent-primary"
                  />
                  <div>
                    <span className="text-[14px] text-on-surface font-semibold block">
                      Zero Depreciation Cover (Bumper-to-Bumper)
                    </span>
                    <span className="text-[12px] text-on-surface-variant">
                      100% claims reimbursement on metal, plastic & glass parts
                    </span>
                  </div>
                </div>
                <span className="text-[13px] font-bold text-secondary">
                  +{vehicleType === 'two-wheeler' ? '₹300' : vehicleType === 'commercial' ? '₹2,400' : '₹1,200'}
                </span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors border border-transparent hover:border-surface-container-high">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={engine}
                    onChange={(e) => setEngine(e.target.checked)}
                    className="w-4 h-4 rounded text-primary accent-primary"
                  />
                  <div>
                    <span className="text-[14px] text-on-surface font-semibold block">
                      Engine & Gearbox Protector
                    </span>
                    <span className="text-[12px] text-on-surface-variant">
                      Guards against water ingression / hydrostatic lock & lubricant leakage
                    </span>
                  </div>
                </div>
                <span className="text-[13px] font-bold text-secondary">
                  +{vehicleType === 'two-wheeler' ? '₹150' : vehicleType === 'commercial' ? '₹1,100' : '₹650'}
                </span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors border border-transparent hover:border-surface-container-high">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={rsa}
                    onChange={(e) => setRsa(e.target.checked)}
                    className="w-4 h-4 rounded text-primary accent-primary"
                  />
                  <div>
                    <span className="text-[14px] text-on-surface font-semibold block">
                      24/7 Roadside Emergency Dispatch
                    </span>
                    <span className="text-[12px] text-on-surface-variant">
                      Free flatbed towing, battery boost, puncture repair nationwide
                    </span>
                  </div>
                </div>
                <span className="text-[13px] font-bold text-secondary">
                  +{vehicleType === 'two-wheeler' ? '₹120' : vehicleType === 'commercial' ? '₹800' : '₹350'}
                </span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors border border-transparent hover:border-surface-container-high">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={returnToInvoice}
                    onChange={(e) => setReturnToInvoice(e.target.checked)}
                    className="w-4 h-4 rounded text-primary accent-primary"
                  />
                  <div>
                    <span className="text-[14px] text-on-surface font-semibold block">
                      Return to Invoice (RTI)
                    </span>
                    <span className="text-[12px] text-on-surface-variant">
                      Recovers total invoice price including road tax during total loss or theft
                    </span>
                  </div>
                </div>
                <span className="text-[13px] font-bold text-secondary">
                  +{vehicleType === 'two-wheeler' ? '₹220' : vehicleType === 'commercial' ? '₹1,400' : '₹750'}
                </span>
              </label>
            </div>

            {/* Price Summary Breakdown Card */}
            <div className="p-5 rounded-xl bg-surface-container border border-secondary-fixed flex flex-col gap-3">
              <div className="flex items-center justify-between text-[13px] text-on-surface-variant">
                <span>Base Own Damage + Third Party Premium</span>
                <span className="font-semibold text-primary">₹{basePrice.toLocaleString('en-IN')}</span>
              </div>
              {ncbDiscount > 0 && (
                <div className="flex items-center justify-between text-[13px] text-emerald-700">
                  <span>NCB Discount ({ncbDiscount}%)</span>
                  <span className="font-semibold">-₹{ncbSavings.toLocaleString('en-IN')}</span>
                </div>
              )}
              {addOnTotal > 0 && (
                <div className="flex items-center justify-between text-[13px] text-on-surface-variant">
                  <span>Selected Add-on Packages</span>
                  <span className="font-semibold text-primary">+₹{addOnTotal.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex items-center justify-between text-[13px] text-on-surface-variant">
                <span>Mandatory GST (18%)</span>
                <span className="font-semibold text-primary">+₹{gstAmount.toLocaleString('en-IN')}</span>
              </div>

              <div className="pt-3 border-t border-surface-container-highest flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
                    Total Payable Premium
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="font-headline text-[26px] font-bold text-primary">
                      ₹{totalAmount.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[12px] text-on-surface-variant">/year</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleProceedToDetails}
                  className="rounded-full bg-error text-on-error font-semibold text-[14px] px-7 py-3 hover:bg-on-error-container transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center gap-1.5"
                >
                  <span>Issue Policy Now</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Policyholder Details */}
        {step === 'details' && (
          <form onSubmit={handleIssuePolicy} className="p-6 md:p-8 flex flex-col gap-5">
            <div className="bg-surface-container-low p-4 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-[12px] text-secondary font-bold uppercase">Locked Annual Premium</span>
                <p className="font-headline text-[22px] font-bold text-primary">
                  ₹{totalAmount.toLocaleString('en-IN')}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setStep('calculate')}
                className="text-[13px] text-secondary hover:underline font-semibold"
              >
                Modify Coverages
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-primary">Full Legal Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Varma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low font-medium text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-primary">Mobile Phone Number (WhatsApp) *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low font-medium text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-primary">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="ramesh@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low font-medium text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-primary">Registration Location / City</label>
                <input
                  type="text"
                  placeholder="e.g. Manjeri, Malappuram"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low font-medium text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-container text-[12px] text-on-surface-variant flex items-start gap-2.5">
              <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">verified_user</span>
              <span>
                Underwriting Guarantee: Digital certificate will be generated and signed instantaneously under IRDAI digital guidelines. Instant WhatsApp copy dispatched.
              </span>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-surface-container">
              <button
                type="button"
                onClick={() => setStep('calculate')}
                className="px-5 py-2.5 rounded-full border border-outline-variant text-[14px] font-semibold text-on-surface hover:bg-surface-container-low"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-error text-on-error text-[14px] font-semibold hover:bg-on-error-container transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Confirm & Generate Digital Policy</span>
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Success Certificate Generated */}
        {step === 'success' && generatedPolicy && (
          <div className="p-6 md:p-8 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-surface-container-low border-2 border-secondary-container flex flex-col gap-5">
              <div className="flex items-center justify-between pb-4 border-b border-surface-container-high">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px]">check</span>
                  </div>
                  <div>
                    <span className="text-[12px] uppercase tracking-wider text-emerald-700 font-bold">
                      Policy Active & Verified
                    </span>
                    <h4 className="font-headline text-[20px] font-bold text-primary">
                      {generatedPolicy.policyNo}
                    </h4>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold uppercase text-secondary">IRDAI Certified</span>
                  <p className="text-[12px] text-on-surface font-semibold">Digital Certificate</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[13px]">
                <div>
                  <span className="text-on-surface-variant block text-[11px] uppercase">Policyholder</span>
                  <span className="font-bold text-primary">{fullName || 'Vehicle Owner'}</span>
                </div>
                <div>
                  <span className="text-on-surface-variant block text-[11px] uppercase">Vehicle Category</span>
                  <span className="font-bold text-primary capitalize">{vehicleType} ({year})</span>
                </div>
                <div>
                  <span className="text-on-surface-variant block text-[11px] uppercase">Coverage Term</span>
                  <span className="font-bold text-primary">1 Year (365 Days)</span>
                </div>
                <div>
                  <span className="text-on-surface-variant block text-[11px] uppercase">Premium Paid</span>
                  <span className="font-bold text-emerald-700">₹{generatedPolicy.finalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="p-3 bg-surface-container rounded-xl flex items-center justify-between text-[12px]">
                <div className="flex items-center gap-2 text-on-surface font-medium">
                  <span className="material-symbols-outlined text-secondary text-[18px]">whatsapp</span>
                  <span>Digital policy schedule dispatched to <strong>{phone || '+91 98765 43210'}</strong></span>
                </div>
                <span className="text-emerald-700 font-bold">DELIVERED</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  window.print();
                }}
                className="px-6 py-2.5 rounded-full bg-surface-container text-primary font-semibold text-[14px] hover:bg-surface-container-high transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                <span>Download Policy PDF</span>
              </button>

              <button
                type="button"
                onClick={resetAndClose}
                className="px-8 py-2.5 rounded-full bg-primary text-on-primary font-semibold text-[14px] hover:bg-secondary transition-colors cursor-pointer"
              >
                Done & Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
