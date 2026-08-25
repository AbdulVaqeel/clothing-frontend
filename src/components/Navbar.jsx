import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  // { label: 'Men', to: '/men' },
  { label: 'Women', to: '/women' },
  { label: 'New Arrivals', to: '/new-arrivals' },
  { label: 'Sale', to: '/sale' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  const [scrolledPastHero, setScrolledPastHero] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolledPastHero(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Only the Home page has a full-bleed dark hero directly under the navbar,
  // so only Home gets the transparent/light-text treatment before scrolling.
  // Every other page always shows the solid, readable navbar.
  const solid = !isHome || scrolledPastHero

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        solid ? 'bg-bone/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(20,19,15,0.08)]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <Link
          to="/"
          className={`font-display italic text-2xl md:text-[26px] tracking-wide transition-colors duration-500 ${
            solid ? 'text-ink' : 'text-bone'
          }`}
        >
          <span className="not-italic">ELVO</span>
        </Link>

        <ul
          className={`hidden md:flex items-center gap-9 text-[11px] font-semibold uppercase tracking-widest2 transition-colors duration-500 ${
            solid ? 'text-ink' : 'text-bone'
          }`}
        >
          {NAV_LINKS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-oxblood after:transition-all after:duration-300 ${
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[5px] w-7 items-end"
        >
          <span
            className={`h-[1.5px] bg-current transition-all duration-300 ${
              solid ? 'text-ink' : 'text-bone'
            } ${menuOpen ? 'w-7 rotate-45 translate-y-[6.5px]' : 'w-7'}`}
          />
          <span
            className={`h-[1.5px] bg-current transition-all duration-300 ${
              solid ? 'text-ink' : 'text-bone'
            } ${menuOpen ? 'opacity-0' : 'w-5'}`}
          />
          <span
            className={`h-[1.5px] bg-current transition-all duration-300 ${
              solid ? 'text-ink' : 'text-bone'
            } ${menuOpen ? 'w-7 -rotate-45 -translate-y-[6.5px]' : 'w-7'}`}
          />
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out bg-bone ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-6 px-6 pb-8 pt-2 text-ink">
          {NAV_LINKS.map((item) => (
            <li key={item.to} className="text-sm font-semibold uppercase tracking-widest2">
              <NavLink to={item.to} end={item.to === '/'} onClick={() => setMenuOpen(false)}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}