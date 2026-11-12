import { profile } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import './Contact.css';

// "https://www.linkedin.com/in/name/" -> "linkedin.com/in/name"
const prettyUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

const rows = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'LinkedIn', value: prettyUrl(profile.socials.linkedin), href: profile.socials.linkedin },
  { label: 'GitHub', value: prettyUrl(profile.socials.github), href: profile.socials.github },
  { label: 'Résumé', value: 'View on Google Drive', href: profile.resumeUrl },
];

const Contact = () => (
  <section id="contact" className="section contact">
    <div className="container">
      <SectionHead index="06" title="Contact" note="Let's work together" />

      <div className="grid contact-top">
        <Reveal as="p" className="contact-lead">
          Have a role, a project or just want to say hi? My inbox is always open.
        </Reveal>

        <Reveal className="contact-email-wrap" delay={0.08}>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </Reveal>
      </div>

      <ul className="contact-list">
        {rows.map((r, i) => {
          const external = !r.href.startsWith('mailto:');
          return (
            <Reveal as="li" key={r.label} delay={i * 0.05}>
              <a
                className="contact-row grid"
                href={r.href}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                <span className="label contact-label">{r.label}</span>
                <span className="contact-value">{r.value}</span>
                <span className="contact-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </Reveal>
          );
        })}
      </ul>
    </div>
  </section>
);

export default Contact;
