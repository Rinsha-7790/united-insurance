import React, { useState } from 'react';
import { MOCK_GARAGES } from '../data/mockData';

interface ClaimModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClaimModal: React.FC<ClaimModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [regNo, setRegNo] = useState<string>('KL-10-AZ-1234');
  const [incidentType, setIncidentType] = useState<string>('Accidental Collision');
  const [incidentDate, setIncidentDate] = useState<string>('2026-10-11');
  const [location, setLocation] = useState<string>('Manjeri, Malappuram');
  const [description, setDescription] = useState<string>('Front bumper and left fender damage during parking collision.');
  const [selectedGarage, setSelectedGarage] = useState<string>(MOCK_GARAGES[0].name);
  const [photosUploaded, setPhotosUploaded] = useState<boolean>(true);
  const [claimId, setClaimId] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmitClaim = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `CLM-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    setClaimId(id);
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-surface-container-lowest w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col my-8 border border-surface-container-high">
        {/* Header */}
        <div className="bg-primary text-on-primary p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-error flex items-center justify-center text-on-error shadow-sm">
              <span className="material-symbols-outlined text-[22px]">health_and_safety</span>
            </div>
            <div>
              <h3 className="font-headline text-[19px] font-bold text-surface-container-lowest leading-tight">
                {step === 4 ? 'Claim Registered Successfully' : 'Fast Cashless Claim Registration'}
              </h3>
              <p className="text-[13px] text-surface-container-high">
                {step === 4
                  ? 'Digital surveyor assigned • Zero out-of-pocket settlement'
                  : 'Instant digital filing with 6,500+ authorized cashless garages'}
              </p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="w-8 h-8 rounded-full bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-surface-container-lowest flex items-center justify-center transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Multi-step flow */}
        {step !== 4 && (
          <div className="px-6 pt-5 pb-2 bg-surface-container-low border-b border-surface-container flex items-center justify-between text-[13px] font-semibold text-on-surface-variant">
            <div className={`flex items-center gap-1.5 ${step === 1 ? 'text-primary font-bold' : ''}`}>
              <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-[11px] flex items-center justify-center">1</span>
              <span>Incident Details</span>
            </div>
            <span className="text-outline-variant">→</span>
            <div className={`flex items-center gap-1.5 ${step === 2 ? 'text-primary font-bold' : ''}`}>
              <span className={`w-6 h-6 rounded-full text-[11px] flex items-center justify-center ${step >= 2 ? 'bg-primary text-on-primary' : 'bg-surface-container text-secondary'}`}>2</span>
              <span>Damage Proof</span>
            </div>
            <span className="text-outline-variant">→</span>
            <div className={`flex items-center gap-1.5 ${step === 3 ? 'text-primary font-bold' : ''}`}>
              <span className={`w-6 h-6 rounded-full text-[11px] flex items-center justify-center ${step === 3 ? 'bg-primary text-on-primary' : 'bg-surface-container text-secondary'}`}>3</span>
              <span>Garage Choice</span>
            </div>
          </div>
        )}

        {/* Step 1: Incident Info */}
        {step === 1 && (
          <div className="p-6 md:p-8 flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-primary">Vehicle Registration Number *</label>
                <input
                  type="text"
                  required
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value.toUpperCase())}
                  placeholder="e.g. KL-10-AZ-1234"
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low font-medium text-[14px] text-on-surface uppercase focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-primary">Type of Incident *</label>
                <select
                  value={incidentType}
                  onChange={(e) => setIncidentType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low font-medium text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option value="Accidental Collision">Accidental Collision / Scratch</option>
                  <option value="Breakdown / Engine Stoppage">Breakdown / Engine Stoppage</option>
                  <option value="Natural Flood / Storm Damage">Natural Flood / Storm Damage</option>
                  <option value="Vandalism or Glass Shatter">Vandalism or Glass Shatter</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-primary">Incident Date</label>
                <input
                  type="date"
                  value={incidentDate}
                  onChange={(e) => setIncidentDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low font-medium text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-primary">Incident Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Street / City / Highway landmark"
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low font-medium text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-bold text-primary">Brief Incident Description</label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Explain what happened to the vehicle..."
                className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low font-medium text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div className="flex justify-end pt-3 border-t border-surface-container">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-8 py-3 rounded-full bg-error text-on-error font-semibold text-[14px] hover:bg-on-error-container transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Continue to Document Proof</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Proof Upload */}
        {step === 2 && (
          <div className="p-6 md:p-8 flex flex-col gap-5">
            <span className="text-[12px] font-bold uppercase tracking-wider text-secondary">
              Digital Evidence Verification
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border-2 border-dashed border-[#c4c6ce] hover:border-secondary transition-colors bg-surface-container-low flex flex-col items-center text-center gap-2.5 cursor-pointer">
                <span className="material-symbols-outlined text-[36px] text-secondary">add_a_photo</span>
                <div>
                  <span className="text-[14px] font-bold text-primary block">Vehicle Damage Photos</span>
                  <span className="text-[12px] text-on-surface-variant">Front, Side, or Affected Panels (3 photos attached)</span>
                </div>
                <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-bold">
                  ✓ Photo_Front_Damage.jpg (2.4 MB)
                </span>
              </div>

              <div className="p-5 rounded-2xl border-2 border-dashed border-[#c4c6ce] hover:border-secondary transition-colors bg-surface-container-low flex flex-col items-center text-center gap-2.5 cursor-pointer">
                <span className="material-symbols-outlined text-[36px] text-secondary">badge</span>
                <div>
                  <span className="text-[14px] font-bold text-primary block">Driver's License & RC Copy</span>
                  <span className="text-[12px] text-on-surface-variant">Instant AI optical character scan</span>
                </div>
                <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-bold">
                  ✓ RC_Registered_Owner.pdf (1.1 MB)
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-container text-[13px] text-on-surface flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-[24px]">bolt</span>
              <span>
                Our AI Damage Surveyor automatically computes preliminary part replacements to expedite workshop repair approval within 4 hours.
              </span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-surface-container">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-2.5 rounded-full border border-outline-variant text-[14px] font-semibold text-on-surface hover:bg-surface-container-low cursor-pointer"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-8 py-3 rounded-full bg-error text-on-error font-semibold text-[14px] hover:bg-on-error-container transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Select Cashless Workshop</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Garage Selection */}
        {step === 3 && (
          <form onSubmit={handleSubmitClaim} className="p-6 md:p-8 flex flex-col gap-5">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-wider text-secondary">
                Select Nearest Cashless Network Garage
              </span>
              <p className="text-[13px] text-on-surface-variant mt-0.5">
                Repairs authorized directly by United Insurance with zero out-of-pocket deductible stress.
              </p>
            </div>

            <div className="space-y-3">
              {MOCK_GARAGES.map((garage) => (
                <label
                  key={garage.id}
                  className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    selectedGarage === garage.name
                      ? 'border-secondary bg-surface-container shadow-sm'
                      : 'border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="garage"
                      checked={selectedGarage === garage.name}
                      onChange={() => setSelectedGarage(garage.name)}
                      className="accent-primary w-4 h-4"
                    />
                    <div>
                      <span className="text-[14px] font-bold text-primary block">{garage.name}</span>
                      <span className="text-[12px] text-on-surface-variant font-medium">
                        {garage.city} • {garage.distance} away
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[12px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                    <span>★</span>
                    <span>{garage.rating}</span>
                  </div>
                </label>
              ))}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-surface-container">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-2.5 rounded-full border border-outline-variant text-[14px] font-semibold text-on-surface hover:bg-surface-container-low cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-error text-on-error font-semibold text-[14px] hover:bg-on-error-container transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Submit Cashless Claim</span>
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Submission Confirmation */}
        {step === 4 && (
          <div className="p-6 md:p-8 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-[32px]">task_alt</span>
              </div>
              <div>
                <span className="text-[12px] font-bold uppercase tracking-wider text-emerald-800">
                  Claim Docket Registered
                </span>
                <h4 className="font-headline text-[22px] font-bold text-emerald-950">
                  {claimId}
                </h4>
                <p className="text-[13px] text-emerald-800 mt-1 max-w-md">
                  Assigned Digital Surveyor: <strong>Vikram Sen (ID #SUR-994)</strong>. Survey verification turnaround is under 4 hours.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl w-full text-left text-[13px] border border-emerald-200 space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Vehicle Reg:</span>
                  <span className="font-bold text-neutral-900">{regNo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Authorized Workshop:</span>
                  <span className="font-bold text-neutral-900">{selectedGarage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Average Workshop Settlement:</span>
                  <span className="font-bold text-emerald-700">48 Hours Cashless Guarantee</span>
                </div>
              </div>

              <div className="p-3 bg-surface-container rounded-xl w-full text-[12px] text-on-surface-variant flex items-center justify-between">
                <span>Direct Claims Coordinator: <strong>+91 1800 000 0000</strong></span>
                <span className="text-secondary font-bold">24/7 OPEN</span>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-primary text-on-primary font-semibold text-[14px] hover:bg-secondary transition-colors cursor-pointer"
              >
                Close & Return to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
