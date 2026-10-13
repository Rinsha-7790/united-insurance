import React, { useState } from 'react';

interface NavbarProps {
  onOpenQuote: (category?: string) => void;
  onOpenRenew: () => void;
  onOpenClaim: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuote,
  onOpenRenew,
  onOpenClaim,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#f8f9ff]/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(11,31,58,0.06)] border-b border-[#e2e8f0]/60">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Zone */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          className="flex items-center gap-3 group text-decoration-none"
        >
          <img
            alt="United Insurance Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/AEtjO1USH5f1tk23y37lZJ6POMbSV6CY1bX33k3YQO1AJ31S9zH6EBzZY0-T_SNU0JvczVk3uIwNMLPfyIIUw2UPmHdQ4rsHwGhJSXolG1CI75UCUpu9qiA2DR2_qJpim0d7LAaxN0aC8XR4UDJ5mGYY96Wcc_1o4WvFi31W2eiUNZuVDSZbhDg1vzVRh4f17XYu9cvGlzEhJc41uzXmjuHm-9BK6FLBmhFAi39U_ixXtuKgnLpDoXZmm161NtLo"
          />
          <div className="flex flex-col">
            <span className="font-headline text-[20px] leading-[26px] text-primary tracking-tight font-bold">
              United Insurance
            </span>
            <span className="text-[11px] leading-[14px] uppercase tracking-wider text-secondary font-bold">
              Drive with Confidence
            </span>
          </div>
        </a>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[14px]">
          <button
            onClick={() => scrollToSection('home')}
            className={`transition-colors font-medium ${
              activeSection === 'home' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`transition-colors font-medium ${
              activeSection === 'about' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('insurance')}
            className={`transition-colors font-medium ${
              activeSection === 'insurance' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`transition-colors font-medium ${
              activeSection === 'contact' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Navigation Menu"
            className="lg:hidden flex items-center justify-center p-2 rounded-full text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e2e8f0] bg-surface-container-lowest/95 backdrop-blur-xl px-6 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left py-2 font-medium text-primary hover:text-secondary text-[16px]"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 font-medium text-on-surface-variant hover:text-primary text-[16px]"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('insurance')}
              className="text-left py-2 font-medium text-on-surface-variant hover:text-primary text-[16px]"
            >
              Motor Insurance Plans
            </button>
            <button
              onClick={() => scrollToSection('claims')}
              className="text-left py-2 font-medium text-on-surface-variant hover:text-primary text-[16px]"
            >
              Claims Support
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-left py-2 font-medium text-on-surface-variant hover:text-primary text-[16px]"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 font-medium text-on-surface-variant hover:text-primary text-[16px]"
            >
              Contact Us
            </button>

            <div className="pt-3 border-t border-surface-container flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-full bg-error text-on-error font-semibold text-center text-[14px] shadow-md"
              >
                Get a Quote
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRenew();
                  }}
                  className="py-2.5 rounded-full bg-surface-container text-primary font-semibold text-center text-[13px]"
                >
                  Renew Policy
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenClaim();
                  }}
                  className="py-2.5 rounded-full bg-surface-container text-primary font-semibold text-center text-[13px]"
                >
                  File a Claim
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
