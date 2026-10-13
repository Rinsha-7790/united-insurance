import React, { useState } from 'react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  const [assistanceType, setAssistanceType] = useState<string>('Accident Towing');
  const [emergencyPhone, setEmergencyPhone] = useState<string>('');
  const [emergencyLoc, setEmergencyLoc] = useState<string>('Current GPS Location Detected (NH 66, Kerala)');
  const [dispatched, setDispatched] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    setDispatched(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-surface-container-lowest w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col my-8 border border-surface-container-high">
        {/* Header */}
        <div className="bg-error text-on-error p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[24px]">emergency</span>
            </div>
            <div>
              <h3 className="font-headline text-[19px] font-bold text-white leading-tight">
                24/7 Roadside Emergency Dispatch
              </h3>
              <p className="text-[13px] text-white/90">
                Nationwide 45-minute arrival guarantee
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col gap-6">
          {/* Toll Free Direct Call banner */}
          <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-error">
                Immediate Direct Voice Line
              </span>
              <p className="font-headline text-[20px] font-bold text-primary">
                1800-000-0000
              </p>
            </div>
            <a
              href="tel:18000000000"
              className="px-5 py-2.5 rounded-full bg-primary text-on-primary text-[13px] font-semibold hover:bg-secondary transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>Call Now</span>
            </a>
          </div>

          {!dispatched ? (
            <form onSubmit={handleDispatch} className="flex flex-col gap-4">
              <span className="text-[12px] font-bold uppercase tracking-wider text-secondary">
                Request Instant Digital Dispatch
              </span>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-primary">Type of Assistance Needed</label>
                <select
                  value={assistanceType}
                  onChange={(e) => setAssistanceType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low font-medium text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option value="Accident Towing">Flatbed Accident Towing</option>
                  <option value="Flat Tire Change">Flat Tire Replacement</option>
                  <option value="Battery Jump Start">Dead Battery Jump-start</option>
                  <option value="Emergency Fuel Delivery">Emergency Fuel Delivery</option>
                  <option value="Key Lockout Assistance">Key Lockout / Key Retrieval</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-primary">Your Contact Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={emergencyPhone}
                  onChange={(e) => setEmergencyPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low font-medium text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-primary">Current Roadway Location</label>
                <input
                  type="text"
                  value={emergencyLoc}
                  onChange={(e) => setEmergencyLoc(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low font-medium text-[14px] text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-error text-on-error font-semibold text-[14px] shadow-md hover:bg-on-error-container transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Dispatch Nearest Response Unit</span>
                <span className="material-symbols-outlined text-[18px]">near_me</span>
              </button>
            </form>
          ) : (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-[32px]">local_shipping</span>
              </div>
              <div>
                <h4 className="font-headline text-[20px] font-bold text-emerald-950">
                  Rescue Unit Dispatched!
                </h4>
                <p className="text-[14px] text-emerald-800 mt-1">
                  Flatbed team is en route. Estimated arrival in <strong>26 minutes</strong>.
                </p>
              </div>
              <div className="p-3 bg-white rounded-xl w-full text-[12px] text-neutral-600 space-y-1 text-left border border-emerald-100">
                <p>Driver Name: <strong>Shaji K. (Towing Vehicle #KL-10-H-4411)</strong></p>
                <p>Tracking SMS dispatched to: <strong>{emergencyPhone || '+91 98765 43210'}</strong></p>
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
