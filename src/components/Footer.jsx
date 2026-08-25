import { Link } from 'react-router-dom'

const SHOP_LINKS = [
  // { label: 'Men', to: '/men' },
  { label: 'Women', to: '/women' },
  { label: 'New Arrivals', to: '/new-arrivals' },
  { label: 'Sale', to: '/sale' },
]

// Minimal line-style brand logos, drawn to match the site's hairline aesthetic
const SOCIALS = [
 {
    name: 'Instagram',
    href: 'https://www.instagram.com/its_me_makeupartist?igsh=d2IweXJpdmlydHF6',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
{
    name: 'WhatsApp',
    href: 'https://wa.me/919790890797',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.5-1.2A8.4 8.4 0 1 0 12 3.5Z" />
        <path
          d="M8.6 8.4c.2-.5.5-.5.8-.5h.6c.2 0 .4 0 .6.4.2.5.7 1.6.7 1.8.1.1.1.3 0 .5-.1.1-.1.3-.3.4-.1.2-.3.4-.4.5-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1 .2-.2.4-.2.6-.1l1.6.8c.2.1.4.2.5.3.1.2.1.9-.2 1.4-.3.6-1.5 1.1-2 1.2-.6.1-1.1.2-3.2-.7-2.5-1-4.1-3.6-4.3-3.7-.1-.2-1-1.3-1-2.5 0-1.2.6-1.8.8-2Z"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-bone">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="font-display italic text-2xl tracking-wide">
              <span className="not-italic">ELVO</span>
            </Link>
            <p className="mt-5 text-bone/60 text-sm leading-relaxed max-w-xs">
              A modern house of tailoring for women, built on honest
              materials and considered form.
            </p>
          </div>

          {/* Shop */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest2 text-bone/50 mb-5">
              Shop
            </p>
            <ul className="space-y-3 text-sm text-bone/80">
              {SHOP_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-bone transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest2 text-bone/50 mb-5">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-bone/80">
              <li>
                <a href="mailto:elvo4949@gmail.com" className="hover:text-bone transition-colors">
                  elvo4949@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919790890797" className="hover:text-bone transition-colors">
                  +91 97908 90797
                </a>
              </li>
              <li className="text-bone/60">No 114, Yelahanka, Bangalore - 560063</li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-14 mb-8 opacity-30" />

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          <p className="text-bone/40 text-xs">
            © {new Date().getFullYear()} Elvo. All rights reserved.
          </p>
          <ul className="flex items-center gap-5">
            {SOCIALS.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  aria-label={social.name}
                  className="flex items-center justify-center w-9 h-9 border border-bone/25 rounded-full text-bone/70 hover:text-ink hover:bg-bone hover:border-bone transition-colors duration-300"
                >
                  <span className="w-4 h-4">{social.icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}