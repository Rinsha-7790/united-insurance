import { useEffect } from 'react';
import { ArrowUpRight, ShieldCheck, CarFront, Bike, Truck, Check, MapPin, Phone, Mail, HeartHandshake, BadgeCheck } from 'lucide-react';

const plans = [
  { icon: CarFront, title: 'Car insurance', text: 'Thoughtful protection for everyday drives, long journeys and everything in between.', tag: 'For private cars' },
  { icon: Bike, title: 'Two-wheeler insurance', text: 'Cover for the daily commute, the weekend ride and the freedom of two wheels.', tag: 'For bikes & scooters' },
  { icon: Truck, title: 'Commercial vehicle', text: 'Flexible cover designed around the vehicles and people that keep business moving.', tag: 'For fleets & businesses' },
];

const benefits = [
  ['Know what you’re covered for', 'Straightforward explanations help make policy details easier to understand.'],
  ['A team ready to help', 'Get guidance with your questions, claims and the unexpected moments on the road.'],
  ['Cover that fits your vehicle', 'Explore options for cars, two-wheelers and commercial vehicles.'],
];

export default function App() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return <div className="site-shell">
    <header className="site-header"><a className="brand" href="#home" aria-label="United Insurance home"><span className="brand-mark"><ShieldCheck size={23}/></span><span><strong>United</strong><small>INSURANCE</small></span></a><nav aria-label="Main navigation"><a href="#about">About us</a><a href="#cover">Our cover</a><a href="#why-us">Why United</a><a href="#contact">Contact</a></nav><a className="header-note" href="#contact">Here for your journey <ArrowUpRight size={16}/></a></header>

    <main>
      <section className="hero" id="home">
        <img className="hero-image" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=88" alt="A car on a scenic road, ready for the journey ahead"/>
        <div className="hero-shade"/>
        <div className="hero-content">
         
          <h1>Go further.<br/><em>We’re with you.</em></h1>
          <p className="hero-copy">Reliable motor insurance for the journeys that make life yours. Simple guidance, considered cover and support you can count on.</p>
          <a className="button button-light" href="#cover">Explore our cover <ArrowUpRight size={17}/></a>
          <div className="hero-caption"><span className="caption-rule"/> Coverage for cars, two-wheelers and commercial vehicles</div>
        </div>
        <div className="hero-stamp"><ShieldCheck size={21}/><span>Confidence in<br/>every mile</span></div>
      </section>
      <section className="intro section-wrap reveal" id="about"><div className="intro-label"><span className="eyebrow">A MORE HUMAN KIND OF COVER</span><span className="index">01 / ABOUT</span></div><div className="intro-main"><h2>Life doesn’t stand still.<br/><span>Your cover should keep up.</span></h2><div className="intro-text"><p>At United Insurance, we believe protection should feel reassuring—not complicated. We help drivers, riders and businesses find motor cover that fits the way they move.</p><p>From the first question to the moments when you need us most, our focus is on clear answers and dependable support.</p></div></div></section>

      <section className="cover-section" id="cover"><div className="section-wrap"><div className="section-heading reveal"><div><span className="eyebrow">MADE FOR YOUR WAY FORWARD</span><h2>Cover for every kind<br/>of journey.</h2></div><p>Wherever you’re headed, start with protection designed around what you drive.</p></div><div className="plan-grid">{plans.map(({icon:Icon,title,text,tag},i)=><article className={`plan-card plan-${i+1} reveal reveal-delay-${i+1}`} key={title}><div className="plan-top"><span className="plan-icon"><Icon size={24}/></span><span className="plan-number">0{i+1}</span></div><div><span className="plan-tag">{tag}</span><h3>{title}</h3><p>{text}</p></div><span className="plan-arrow"><ArrowUpRight size={20}/></span></article>)}</div></div></section>

      <section className="why-section reveal" id="why-us"><div className="why-photo"><img src="https://www.bhatnagarservices.in/professional-insurance-advisor-showing-policy-docu.jpg" alt="An insurance advisor reviewing policy documents with a customer"/><div className="photo-note"><span className="photo-note-icon"><HeartHandshake size={20}/></span><span>Clear answers today.<br/>Confidence for the road ahead.</span></div></div><div className="why-copy"><span className="eyebrow">THE UNITED DIFFERENCE</span><h2>Clear cover.<br/><em>Real support.</em></h2><p className="why-lead">Good insurance means understanding what your policy covers—and knowing who to turn to when you need help.</p><div className="benefit-list">{benefits.map(([title,text])=><div className="benefit" key={title}><span className="benefit-check"><Check size={15}/></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>

      <section className="promise-band reveal"><div className="promise-inner"><div><span className="eyebrow light">A LITTLE MORE PEACE OF MIND</span><h2>On the road, you’re<br/><em>never on your own.</em></h2></div><p>When the unexpected happens, a little reassurance goes a long way. Our team is here to help you find the right next step.</p><a href="#contact" className="button button-outline">Talk to our team <ArrowUpRight size={17}/></a><div className="promise-orbit orbit-one"/><div className="promise-orbit orbit-two"/></div></section>

      <section className="contact-section section-wrap reveal" id="contact"><div className="contact-title"><span className="eyebrow">LET’S TALK</span><h2>Here when you<br/><em>need a hand.</em></h2><p>Have a question about motor insurance? We’d be glad to point you in the right direction.</p></div><div className="contact-details"><a className="contact-item" href="tel:+911800000000"><span className="contact-icon"><Phone size={19}/></span><span><small>CALL OUR TEAM</small><strong>+91 1800 000 0000</strong><em>Assistance available 24/7</em></span><ArrowUpRight className="contact-arrow" size={18}/></a><a className="contact-item" href="mailto:support@unitedinsurance.com"><span className="contact-icon"><Mail size={19}/></span><span><small>EMAIL US</small><strong>support@unitedinsurance.com</strong><em>We’re happy to help</em></span><ArrowUpRight className="contact-arrow" size={18}/></a><div className="contact-item"><span className="contact-icon"><MapPin size={19}/></span><span><small>VISIT OUR REGIONAL OFFICE</small><strong>Manjeri, Kerala, India</strong><em>United Insurance</em></span></div><div className="contact-foot"><BadgeCheck size={17}/> Clear answers. Considered cover. Human support.</div></div></section>
    </main>

    <footer className="site-footer"><a className="brand brand-footer" href="#home"><span className="brand-mark"><ShieldCheck size={21}/></span><span><strong>United</strong><small>INSURANCE</small></span></a><p>Confidence for every journey.</p><span className="copyright">© 2026 United Insurance. All rights reserved.</span></footer>
  </div>;
}
