import { useState } from 'react';
import { ArrowUpRight, Linkedin, Github, Mail, Youtube, Video } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { SITE, SOCIAL } from '../data/site';
import { trackEvent } from '../utils/analytics';

const ICONS = { LinkedIn: Linkedin, GitHub: Github, Email: Mail, YouTube: Youtube, TikTok: Video };
const FORMSPREE_URL = process.env.REACT_APP_FORMSPREE_URL;

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const message = data.get('message')?.toString().trim();
    const intent = data.get('intent')?.toString();

    if (!name || !email || !message) {
      setError('Please fill in all required fields.');
      setStatus('error');
      return;
    }

    trackEvent('contact_form_submit', { intent });

    if (!FORMSPREE_URL) {
      const subject = encodeURIComponent(`Portfolio contact: ${intent || 'General'}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nIntent: ${intent}\n\n${message}`);
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
      setStatus('sent');
      form.reset();
      return;
    }

    setStatus('sending');
    setError('');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, intent, _replyto: email }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('sent');
      form.reset();
    } catch {
      setError('Something went wrong. Please email directly.');
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-void border border-line text-sm text-ink placeholder:text-faint focus:outline-none focus:border-muted transition-colors';

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="reveal grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader
              number="05"
              label="Contact"
              title={{ serif: 'Open to conversation', main: 'Get in touch' }}
            />
            <p className="text-sm text-muted leading-relaxed mb-8 max-w-sm -mt-6">
              Full-time roles, freelance, and research. Dublin-based, remote-friendly.
            </p>
            <a
          href={`mailto:${SITE.email}`}
          className="link-underline text-base inline-flex items-center gap-2 mb-10"
          onClick={() => trackEvent('contact_click', { method: 'email' })}
        >
              {SITE.email}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <div className="flex gap-4">
              {SOCIAL.map(({ label, href }) => {
                const Icon = ICONS[label];
                if (!Icon) return null;
                return (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="p-2.5 border border-line text-muted hover:text-ink hover:border-muted transition-colors"
                    onClick={() => trackEvent('contact_click', { method: label })}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal panel p-8 space-y-4" noValidate>
            <p className="eyebrow mb-2">Message</p>
            <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Name *" aria-label="Name" />
            <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="Email *" aria-label="Email" />
            <select id="intent" name="intent" defaultValue="Hiring" className={inputClass} aria-label="Intent">
              <option>Hiring</option>
              <option>Freelance project</option>
              <option>Research collaboration</option>
              <option>Other</option>
            </select>
            <textarea id="message" name="message" required rows={4} className={`${inputClass} resize-y min-h-[100px]`} placeholder="Your message *" aria-label="Message" />
            {error && <p className="text-sm text-red-400/90" role="alert">{error}</p>}
            {status === 'sent' && (
              <p className="text-sm text-accent" role="status">
                {FORMSPREE_URL ? 'Sent. I\'ll reply soon.' : 'Opening your email client…'}
              </p>
            )}
            <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center disabled:opacity-50">
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
