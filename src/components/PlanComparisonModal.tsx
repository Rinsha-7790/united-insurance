import React from 'react';

interface PlanComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (planName: string) => void;
}

export const PlanComparisonModal: React.FC<PlanComparisonModalProps> = ({
  isOpen,
  onClose,
  onSelectPlan
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-surface-container-lowest w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col my-8 border border-surface-container-high">
        {/* Header */}
        <div className="bg-primary text-on-primary p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary-container shadow-sm">
              <span className="material-symbols-outlined text-[22px]">tune</span>
            </div>
            <div>
              <h3 className="font-headline text-[19px] font-bold text-surface-container-lowest leading-tight">
                Motor Insurance Plans Comparison
              </h3>
              <p className="text-[13px] text-surface-container-high">
                Side-by-side evaluation of coverage features and statutory benefits
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

        {/* Comparison Table */}
        <div className="p-6 md:p-8 overflow-x-auto max-h-[75vh]">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-surface-container-high">
                <th className="py-4 px-4 text-[13px] font-bold uppercase text-secondary">
                  Coverage Feature
                </th>
                <th className="py-4 px-4 text-center">
                  <div className="font-bold text-primary text-[15px]">Third-Party</div>
                  <div className="text-[11px] text-secondary font-semibold">Statutory Tariff</div>
                </th>
                <th className="py-4 px-4 text-center">
                  <div className="font-bold text-primary text-[15px]">Standard Car</div>
                  <div className="text-[11px] text-secondary font-semibold">₹2,094 /year</div>
                </th>
                <th className="py-4 px-4 text-center bg-surface-container-low rounded-t-xl">
                  <div className="font-bold text-primary text-[15px]">All-Round Shield</div>
                  <div className="text-[11px] text-error font-bold">₹3,450 /year</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container text-[14px]">
              <tr>
                <td className="py-3 px-4 font-medium text-primary">Third-Party Bodily Injury & Death</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">Unlimited</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">Unlimited</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold bg-surface-container-low">Unlimited</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-primary">Third-Party Property Damage</td>
                <td className="py-3 px-4 text-center text-on-surface">Up to ₹7.5L</td>
                <td className="py-3 px-4 text-center text-on-surface">Up to ₹7.5L</td>
                <td className="py-3 px-4 text-center text-on-surface bg-surface-container-low font-semibold">Up to ₹7.5L</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-primary">Accidental Collision (Own Damage)</td>
                <td className="py-3 px-4 text-center text-outline">✕</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Included</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold bg-surface-container-low">✓ Included</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-primary">Fire, Theft & Vandalism</td>
                <td className="py-3 px-4 text-center text-outline">✕</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Included</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold bg-surface-container-low">✓ Included</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-primary">Natural Floods, Storms & Earthquakes</td>
                <td className="py-3 px-4 text-center text-outline">✕</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Included</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold bg-surface-container-low">✓ Included</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-primary">Zero Depreciation (Bumper to Bumper)</td>
                <td className="py-3 px-4 text-center text-outline">✕</td>
                <td className="py-3 px-4 text-center text-secondary">Optional Add-on</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold bg-surface-container-low">✓ Built-in</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-primary">Engine & Gearbox Protection Shield</td>
                <td className="py-3 px-4 text-center text-outline">✕</td>
                <td className="py-3 px-4 text-center text-secondary">Optional Add-on</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold bg-surface-container-low">✓ Built-in</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-primary">24/7 Roadside Emergency Dispatch</td>
                <td className="py-3 px-4 text-center text-outline">✕</td>
                <td className="py-3 px-4 text-center text-secondary">Optional (+₹350)</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold bg-surface-container-low">✓ Free 24/7</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-primary">Cashless Garage Network</td>
                <td className="py-3 px-4 text-center text-outline">N/A</td>
                <td className="py-3 px-4 text-center font-semibold text-primary">6,500+ Garages</td>
                <td className="py-3 px-4 text-center font-semibold text-primary bg-surface-container-low">6,500+ Priority</td>
              </tr>
              <tr className="bg-surface-container/50">
                <td className="py-4 px-4 font-bold text-primary">Select Cover</td>
                <td className="py-4 px-4 text-center">
                  <button
                    onClick={() => { onClose(); onSelectPlan('Third-Party'); }}
                    className="px-4 py-2 rounded-full bg-secondary text-on-secondary text-[12px] font-semibold hover:bg-primary transition-colors cursor-pointer"
                  >
                    Select Plan
                  </button>
                </td>
                <td className="py-4 px-4 text-center">
                  <button
                    onClick={() => { onClose(); onSelectPlan('Car'); }}
                    className="px-4 py-2 rounded-full bg-primary text-on-primary text-[12px] font-semibold hover:bg-secondary transition-colors cursor-pointer"
                  >
                    Select Plan
                  </button>
                </td>
                <td className="py-4 px-4 text-center bg-surface-container-low rounded-b-xl">
                  <button
                    onClick={() => { onClose(); onSelectPlan('Comprehensive'); }}
                    className="px-5 py-2.5 rounded-full bg-error text-on-error text-[12px] font-semibold hover:bg-on-error-container transition-colors shadow-md cursor-pointer"
                  >
                    Select Complete Pack
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
