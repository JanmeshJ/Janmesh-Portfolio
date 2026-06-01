import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import profileImg from '../profile.png';
import { SITE, ROLES } from '../data/site';
import SectionLink from './SectionLink';

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 3200);
    return () => clearInterval(iv);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-24 pb-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="hero-el mb-10" style={{ animationDelay: '0ms' }}>
              <p className="eyebrow">Available · {SITE.location}</p>
            </div>

            <div className="hero-el mb-5" style={{ animationDelay: '60ms' }}>
              <h1 className="hero-name">
                Janmesh
                <span className="block text-muted">Joshi</span>
              </h1>
            </div>

            <div className="hero-el mb-6" style={{ animationDelay: '120ms' }}>
              <p className="hero-role">
                {SITE.title}
                <span className="text-muted"> · </span>
                <span key={roleIdx} className="role-animate text-accent inline-block">
                  {ROLES[roleIdx]}
                </span>
              </p>
            </div>

            <div className="hero-el mb-10" style={{ animationDelay: '180ms' }}>
              <p className="hero-lede">
                {SITE.tagline} Previously at Panghat deploying ML on AWS; now building{' '}
                <a href="https://mynextroom.ie" className="text-ink underline decoration-line underline-offset-[3px] hover:decoration-muted transition-colors">
                  MyNextRoom
                </a>{' '}
                for Ireland&apos;s rental market.
              </p>
            </div>

            <div className="hero-el flex flex-wrap gap-3" style={{ animationDelay: '240ms' }}>
              <SectionLink href="#projects" className="btn-primary">
                View work <ArrowUpRight size={15} aria-hidden="true" />
              </SectionLink>
              <SectionLink href="#contact" className="btn-secondary">Contact</SectionLink>
            </div>
          </div>

          <div className="hero-el order-1 lg:order-2 flex justify-center lg:justify-end" style={{ animationDelay: '100ms' }}>
            <figure className="w-[min(100%,260px)]">
              <div className="panel overflow-hidden">
                <img
                  src={profileImg}
                  alt="Janmesh Joshi"
                  className="w-full aspect-[4/5] object-cover"
                  style={{ objectPosition: '50% 12%' }}
                  loading="eager"
                  fetchPriority="high"
                  width={260}
                  height={325}
                />
              </div>
              <figcaption className="mt-4 grid grid-cols-2 gap-4 text-[11px] leading-snug text-muted border-t border-line pt-3">
                <span>MSc Human-Centered AI<br /><span className="text-faint">TU Dublin</span></span>
                <span className="text-right">Building MyNextRoom<br /><span className="text-accent">mynextroom.ie</span></span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
