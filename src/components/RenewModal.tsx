import React, { useState } from 'react';
import { MOCK_POLICIES } from '../data/mockData';
import { PolicyRecord } from '../types/insurance';

interface RenewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RenewModal: React.FC<RenewModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState<string>('KL-10-AZ-1234');
  const [searchedPolicy, setSearchedPolicy] = useState<PolicyRecord | null>(MOCK_POLICIES['KL-10-AZ-1234']);
  const [renewSuccess, setRenewSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toUpperCase();
    const found = MOCK_POLICIES[query] || Object.values(MOCK_POLICIES).find(p => p.policyNumber === query);

    if (found) {
      setSearchedPolicy(found);
      setErrorMsg('');
      setRenewSuccess(false);
    } else {
      // Create a dynamic policy record for any registration number entered
      setSearchedPolicy({
        policyNumber: `UI-2023-${Math.floor(100000 + Math.random() * 900000)}`,
        registrationNumber: query,
        vehicleName: 'Registered Vehicle ' + query,
        category: 'car',
        ownerName: 'Policyholder',
        planName: 'Comprehensive Motor Protection',
        expiryDate: '2026-10-31',
        premiumPaid: 3250,
        ncbBonus: 25,
        status: 'Expiring Soon'
      });
      setErrorMsg('');
      setRenewSuccess(false);
    }
  };

  const handleRenewNow = () => {
    setRenewSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-surface-container-lowest w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col my-8 border border-surface-container-high">
        {/* Header */}
        <div className="bg-primary text-on-primary p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary-container shadow-sm">
              <span className="material-symbols-outlined text-[22px]">autorenew</span>
            </div>
            <div>
              <h3 className="font-headline text-[19px] font-bold text-surface-container-lowest leading-tight">
                Instant Policy Renewal
              </h3>
              <p className="text-[13px] text-surface-container-high">
                60-second renewal with zero inspection & automatic NCB carry-forward
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-surface-container-lowest flex items-center justify-center transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col gap-6">
          {/* Quick search form */}
          <form onSubmit={handleSearch} className="flex flex-col gap-2">
            <label className="text-[12px] font-bold text-primary uppercase tracking-wider">
              Registration Number or Policy ID
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                required
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g. KL-10-AZ-1234 or UI-2024-884920"
                className="flex-1 px-4 py-2.5 rounded-xl bg-surface-container-low font-medium text-[14px] text-on-surface uppercase focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-primary text-on-primary text-[14px] font-semibold hover:bg-secondary transition-colors cursor-pointer shrink-0"
              >
                Lookup
              </button>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[11px] text-on-surface-variant font-medium">Try sample:</span>
              {['KL-10-AZ-1234', 'KA-01-MJ-5582', 'KL-07-CB-9011'].map((sample) => (
                <button
                  key={sample}
                  type="button"
                  onClick={() => {
                    setSearchQuery(sample);
                    setSearchedPolicy(MOCK_POLICIES[sample]);
                    setRenewSuccess(false);
                  }}
                  className="text-[11px] px-2 py-0.5 rounded bg-surface-container text-secondary font-semibold hover:bg-surface-container-high"
                >
                  {sample}
                </button>
              ))}
            </div>
          </form>

          {errorMsg && (
            <p className="text-[13px] text-error font-medium">{errorMsg}</p>
          )}

          {/* Searched Policy Card */}
          {searchedPolicy && !renewSuccess && (
            <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
                    Active Policy
                  </span>
                  <h4 className="font-headline text-[17px] font-bold text-primary">
                    {searchedPolicy.vehicleName}
                  </h4>
                  <p className="text-[12px] text-on-surface-variant font-mono">
                    Reg: {searchedPolicy.registrationNumber} • Policy: {searchedPolicy.policyNumber}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                    searchedPolicy.status === 'Expiring Soon'
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : searchedPolicy.status === 'Expired'
                      ? 'bg-red-100 text-red-900 border border-red-300'
                      : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  }`}
                >
                  {searchedPolicy.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[13px]">
                <div>
                  <span className="text-on-surface-variant text-[11px] block uppercase">Current Policyholder</span>
                  <span className="font-bold text-primary">{searchedPolicy.ownerName}</span>
                </div>
                <div>
                  <span className="text-on-surface-variant text-[11px] block uppercase">Coverage Valid Until</span>
                  <span className="font-bold text-primary">{searchedPolicy.expiryDate}</span>
                </div>
                <div>
                  <span className="text-on-surface-variant text-[11px] block uppercase">NCB Bonus Tier</span>
                  <span className="font-bold text-emerald-700">{searchedPolicy.ncbBonus}% Earned Savings</span>
                </div>
                <div>
                  <span className="text-on-surface-variant text-[11px] block uppercase">Renewal Estimate</span>
                  <span className="font-bold text-primary">₹{(searchedPolicy.premiumPaid * 1.05).toFixed(0)} <span className="text-[11px] font-normal text-on-surface-variant">incl. GST</span></span>
                </div>
              </div>

              <div className="p-3 bg-surface-container rounded-xl flex items-center gap-2.5 text-[12px] text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[20px]">task_alt</span>
                <span>Pre-qualified for 0 physical inspections. Seamless 1-year extension.</span>
              </div>

              <button
                type="button"
                onClick={handleRenewNow}
                className="w-full py-3.5 rounded-full bg-error text-on-error font-semibold text-[14px] shadow-md hover:bg-on-error-container transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Renew Policy in 60 Seconds</span>
                <span className="material-symbols-outlined text-[18px]">bolt</span>
              </button>
            </div>
          )}

          {/* Renewal Completed Screen */}
          {renewSuccess && (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-[32px]">verified</span>
              </div>
              <div>
                <h4 className="font-headline text-[20px] font-bold text-emerald-950">
                  Renewal Successful!
                </h4>
                <p className="text-[14px] text-emerald-800 mt-1">
                  Policy <strong>{searchedPolicy?.policyNumber}</strong> is extended for 365 days.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl w-full text-left text-[13px] border border-emerald-200 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-neutral-500">New Validity:</span>
                  <span className="font-bold text-neutral-900">Until October 2027</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">NCB Upgraded To:</span>
                  <span className="font-bold text-emerald-700">{(searchedPolicy?.ncbBonus || 20) + 5}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Digital Copy:</span>
                  <span className="font-bold text-neutral-900">Sent via WhatsApp & Email</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="px-8 py-2.5 rounded-full bg-primary text-on-primary font-semibold text-[14px] hover:bg-secondary transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
